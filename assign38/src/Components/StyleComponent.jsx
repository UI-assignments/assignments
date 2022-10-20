import React from 'react'

export default function StyleComponent() {
    const styles = {
        backgroundColor: 'black',
        color: 'white',
        fontWeight: 'bold',
        marginBottom: '20px',
        paddingBottom: '30px',
        borderRadius: '50%',
        border: '5px double blue',
        width:'400px',
        margin:'auto'
    }
    return (
        <div style={styles}>StyleComponent</div>
    )
}
