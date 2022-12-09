import photo from '../img/nash.jpg'

function Info(){

    return(
        <div className='container'>
            <div className='personal-info'>
            <img src={photo} alt="selfie"/>
            <h1>Nash Zangio</h1>
            <h3>Front-end Developer</h3>
            <p>**My website name**</p>
            </div>

            <div className='contact-btn'>
                <a href='mailto:nash.c.zangio@gmail.com'>EMAIL</a>
            </div>
            
        </div>
    )
}

export default Info;