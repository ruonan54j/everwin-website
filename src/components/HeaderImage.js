function HeaderImage(props) {
    return (
        <div className={props.classStyle + " text-center"} >
            <h1 className='header'>{props.text}</h1>
        </div>
    )
}

export default HeaderImage