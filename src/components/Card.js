

const Card = ({text, name}) => {
    return (
        <div className='first'>
            <div className='star'>
                <div className='str'></div>
                <div className='str'></div>
                <div className='str'></div>
                <div className='str'></div>
                <div className='str'></div>
            </div>
            <div className='lorm'>{text}</div>
            <div className='persons'>
                <div className='person'></div>
                <div>{name}</div>
            </div>

        </div>
    )
}

export default Card