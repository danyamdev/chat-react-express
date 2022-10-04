import express from "express";
import socket from "socket.io";

import { MessageModel } from "../models";

class MessageController {
  io: socket.Server;

  constructor(io: socket.Server) {
    this.io = io;
  }

  index = (req: any, res: any) => {
    const dialogId = req.query.dialog;

    // @ts-ignore
    MessageModel.find({ dialog: dialogId })
      .populate(["dialog"])
      .exec(function(err: any, messages: any) {
        if (err) {
          return res.status(404).json({
            message: "Messages not found"
          });
        }
        return res.json(messages);
      });
  };

  create = (req: any, res: any) => {
    // @ts-ignore
    const userId = req.user._id;

    const postData = {
      text: req.body.text,
      dialog: req.body.dialog_id,
      user: userId
    };

    const message = new MessageModel(postData);

    message
      .save()
      .then((obj: any) => {
        obj.populate("dialog", (err: any, message: any) => {
          if (err) {
            return res.status(500).json({
              message: err
            });
          }
          res.json(message);
          this.io.emit("SERVER:NEW_MESSAGE", message);
        });
      })
      .catch((reason: any) => {
        res.json(reason);
      });
  };

  delete = (req: any, res: any) => {
    const id: string = req.params.id;
    MessageModel.findOneAndRemove({ _id: id })
      .then((message: any) => {
        if (message) {
          res.json({
            message: `Message deleted`
          });
        }
      })
      .catch(() => {
        res.json({
          message: `Message not found`
        });
      });
  };
}

export default MessageController;