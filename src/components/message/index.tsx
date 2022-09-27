import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { PauseOutlined, PlayCircleOutlined } from '@ant-design/icons';

import { Time, IconReaded } from 'components/index';

import { convertCurrentTime } from 'utils/helpers';

import waveSvg from 'assets/img/wave.svg';

import './style.scss';

type TMessageAudio = {
  audioSrc: any;
}

const MessageAudio: React.FC<TMessageAudio> = ({ audioSrc }) => {
  const audioElem = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = () => {
    if (!isPlaying) {
      // @ts-ignore
      audioElem.current.play();
    } else {
      // @ts-ignore
      audioElem.current.pause();
    }
  };

  useEffect(() => {
    // @ts-ignore
    audioElem.current.volume = "0.01";
    // @ts-ignore
    audioElem?.current.addEventListener(
      "playing",
      () => {
        setIsPlaying(true);
      },
      false
    );
    // @ts-ignore
    audioElem.current.addEventListener(
      "ended",
      () => {
        setIsPlaying(false);
        setProgress(0);
        setCurrentTime(0);
      },
      false
    );
    // @ts-ignore
    audioElem.current.addEventListener(
      "pause",
      () => {
        setIsPlaying(false);
      },
      false
    );
    // @ts-ignore
    audioElem.current.addEventListener("timeupdate", () => {
      const duration = (audioElem.current && audioElem.current.duration) || 0;
      // @ts-ignore
      setCurrentTime(audioElem.current.currentTime);
      // @ts-ignore
      setProgress((audioElem.current.currentTime / duration) * 100);
    });
  }, []);

  console.log('===>audioSrc', audioSrc);
  return (
    <div className="message__audio">
      <audio ref={audioElem} src={audioSrc} preload="auto" />
      <div
        className="message__audio-progress"
        style={{ width: progress + "%" }}
      />
      <div className="message__audio-info">
        <div className="message__audio-btn">
          <button onClick={togglePlay}>
            {isPlaying ? (
              <PauseOutlined />
              // <img src={pauseSvg} alt="Pause svg" />
            ) : (
              <PlayCircleOutlined />
              // <img src={playSvg} alt="Play svg" />
            )}
          </button>
        </div>
        <div className="message__audio-wave">
          <img src={waveSvg} alt="Wave svg" />
        </div>
        <span className="message__audio-duration">
          {convertCurrentTime(currentTime)}
        </span>
      </div>
    </div>
  );
};

type TMessage = {
  avatar: string;
  user?: any;
  text?: string;
  audio?: any;
  date?: string;
  attachments?: any;
  isMe?: boolean;
  isReaded?: boolean;
  isTyping?: boolean;
}

const Message: React.FC<TMessage> = ({
  avatar,
  user,
  text,
  audio,
  date,
  isMe,
  isReaded,
  attachments,
  isTyping,
}) => (
  <div
    className={classNames("message", {
      "message--isme": isMe,
      "message--is-typing": isTyping,
      "message--is-audio": audio,
      "message--image": attachments && attachments.length === 1
    })}
  >
    <div className="message__content">
      {typeof isMe === 'boolean' && typeof isReaded === 'boolean' && (
        <IconReaded isMe={isMe} isReaded={isReaded} />
      )}
      <div className="message__avatar">
        <img src={avatar} alt={`Avatar ${user?.fullname}`} />
      </div>
      <div className="message__info">
        {(audio || text || isTyping) && (
          <div className="message__bubble">
            {text && <p className="message__text">{text}</p>}
            {isTyping && (
              <div className="message__typing">
                <span />
                <span />
                <span />
              </div>
            )}
            {audio && <MessageAudio audioSrc={audio} />}
          </div>
        )}

        {attachments && (
          <div className="message__attachments">
            {attachments.map((item: any, index: number) => (
              <div key={index} className="message__attachments-item">
                <img src={item.url} alt={item.filename} />
              </div>
            ))}
          </div>
        )}

        {date && (
          <span className="message__date">
              <Time date={date} />
            </span>
        )}
      </div>
    </div>
  </div>
);

export default Message;