import React, { useState } from 'react';

interface Vote {
  kinoko: number;
  takenoko: number;
}

export const App: React.FC = () => {
  const [vote, setVote] = useState<Vote>({ kinoko: 0, takenoko: 0 });

  const voteKinoko = () => {
    // 以下のように state を更新してしまうと、React は state が
    // 更新されていないと判定するのでコンポーネントが再レンダーされない。
    // vote.kinoko = vote.kinoko + 1;
    // setVote(vote);

    // スプレッド演算子を用いて新しいオブジェクトを生成することにより再レンダリングされる
    const newVote: Vote = { ...vote, kinoko: vote.kinoko + 1 };
    setVote(newVote);
  };

  // 波線部分がこの関数の型定義。
  // const voteTakenoko: () => void = () => {}
  //                   ^^^^^^^^^^^^
  const voteTakenoko: () => void = () => {
    const newVote: Vote = { ...vote, takenoko: vote.takenoko + 1 };
    setVote(newVote);
  };

  return (
    <>
      <p>きのこ: {vote.kinoko}</p>
      <p>たけのこ: {vote.takenoko}</p>
      <button onClick={voteKinoko}>きのこ</button>
      <button onClick={voteTakenoko}>たけのこ</button>
    </>
  );
};

// 配列版はこちらを参照
// https://codesandbox.io/s/05-usestatedepeiliewoxiu-tnior?file=/src/App.js