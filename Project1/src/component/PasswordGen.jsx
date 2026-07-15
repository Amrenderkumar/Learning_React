import React, { useCallback, useEffect, useState } from 'react'

const PasswordGen = () => {

    const [length, setLength] = useState(12);
    const [numberallowed, setNumberAllowed] = useState(false);
    const [charectersallowed, setCharactersAllowed] = useState(false);
    const [password, setPassword] = useState('');

    const generatePassword = useCallback(()=>{
        let pass = '';
        let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

        if (numberallowed) characters += '0123456789';
        if (charectersallowed) characters += '!@#$%^&*()-+';

        for (let i = 0; i < length; i++) {
            const random = Math.floor(Math.random() * characters.length);
            pass += characters.charAt(random);
        }
        setPassword(pass);
    },[length, numberallowed, charectersallowed, setPassword]);

    useEffect(()=>{
         generatePassword();
    },[length, numberallowed, charectersallowed, generatePassword]);

    return (
        <div className='bg-black h-screen w-screen flex flex-col justify-center items-center'>
            <h1 className='text-white text-4xl'>Password Generator</h1>
            <div className='w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-md'>
                <div className='bg-white max-w-md mx-auto rounded-2xl'>
                    <input type="text" value={password} placeholder='Password' readOnly className='outline-none w-full px-1 py-2' />
                </div>
                <div className='text-sm flex gap-x-2 m-2'>
                    <div className='flex items-center gap-x-1 '>
                        <input type="range" className='cursor-pointer text-white' min={6} max={100} value={length} onChange={(e) => setLength(e.target.value)} />
                        <label className='text-white' htmlFor="length">Length: {length}</label>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <input type="checkbox" checked={numberallowed} onChange={(e) => setNumberAllowed(e.target.checked)} className='cursor-pointer' />
                        <label className='text-white' htmlFor="numberallowed">Numbers</label>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <input type="checkbox" checked={charectersallowed} onChange={(e) => setCharactersAllowed(e.target.checked)} className='cursor-pointer' />
                        <label className='text-white' htmlFor="charectersallowed">Characters</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PasswordGen
