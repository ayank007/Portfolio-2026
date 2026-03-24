const FormattedText = ({ text }: { text: string }) => {
    const parts = text.split(/(\*\*.*?\*\*|<br\s*\/?>)/g);

    return (
        <>
            {parts.map((part, index) => {
                if (part.startsWith('**')) {
                    return <b key={index}>{part.slice(2, -2)}</b>;
                }
                if (part.toLowerCase().includes('<br')) {
                    return <br key={index} />;
                }
                return part;
            })}
        </>
    );
};

export default FormattedText;