import React from 'react';

interface Props {
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    name: string;
    label: string;
}

const FileInput: React.FC<Props> = ({onChange, label, name}) => {
    return (
        <>
         <input type="file"/>
        </>
    );
};

export default FileInput;