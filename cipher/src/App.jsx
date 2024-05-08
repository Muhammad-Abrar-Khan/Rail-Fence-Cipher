import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const RailFenceCipher = () => {
  const [plainText, setPlainText] = useState('');
  const [key, setKey] = useState('');
  const [cipherText, setCipherText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const encryptRailFenceCipher = () => {
    let row = Array.from({ length: parseInt(key) }, () => []);
    for (let i = 0; i < parseInt(key); i++) {
      for (let j = i; j < plainText.length; j += parseInt(key)) {
        row[i].push(plainText[j]);
      }
    }
    const encryptedText = row.flat().join('');
    setCipherText(encryptedText);
  };

  const decryptRailFenceCipher = () => {
    let decryptedText = '';
    const depth = Math.ceil(cipherText.length / parseInt(key));
    for (let i = 0; i < depth; i++) {
      for (let j = i; j < cipherText.length; j += depth) {
        decryptedText += cipherText[j];
      }
    }
    setDecryptedText(decryptedText);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Rail Fence Cipher</h1>
      <div className="w-96 mb-4">
        <label className="block mb-2">Enter Plain Text</label>
        <input
          type="text"
          className="border border-gray-300 p-2 w-full mb-4"
          value={plainText}
          onChange={(e) => setPlainText(e.target.value)}
        />
        <label className="block mb-2">Enter Key</label>
        <input
          type="number"
          className="border border-gray-300 p-2 w-full mb-4"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={encryptRailFenceCipher}
        >
          Encrypt
        </button>
      </div>
      {cipherText && (
        <div className="w-96 mb-4">
          <label className="block mb-2">Encrypted Text</label>
          <input
            type="text"
            className="border border-gray-300 p-2 w-full mb-4"
            value={cipherText}
            readOnly
          />
        </div>
      )}
      <div className="w-96 mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={decryptRailFenceCipher}
        >
          Decrypt
        </button>
      </div>
      {decryptedText && (
        <div className="w-96">
          <label className="block mb-2">Decrypted Text</label>
          <input
            type="text"
            className="border border-gray-300 p-2 w-full mb-4"
            value={decryptedText}
            readOnly
          />
        </div>
      )}
    </div>
  );
};

export default RailFenceCipher;
