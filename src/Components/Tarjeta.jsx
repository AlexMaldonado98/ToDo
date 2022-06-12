function Tarjeta ({photo='https://th.bing.com/th/id/R.d746339d340497c64a986e03a50b4d9c?rik=5o0krVuBMm%2bu0g&pid=ImgRaw&r=0&sres=1&sresct=1',title='title',text='text',button='button'}) {
    return(
        <div className="card my-3">
          <img src={photo} className="card-img-top" alt="Picsum Photos"/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{text}</p>
              <a href="#" className="btn btn-primary">{button}</a>
            </div>
        </div>
    )
}

export default Tarjeta;