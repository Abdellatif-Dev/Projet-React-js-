export function Header(props) {
    const headerStyle = {
        textAlign: 'center',
        fontSize: '24px',
        color: '#333',
        margin: '20px 0'
    };

    return <p style={headerStyle}>{props.text}</p>;
}
