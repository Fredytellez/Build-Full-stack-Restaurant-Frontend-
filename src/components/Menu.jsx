import {data} from "../restApi.json"

const Menu = () => {
  return (
    <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className='heading'>PLATOS POPULARES</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium magni modi a ullam. Voluptatum quasi sequi sunt nobis dignissimos dolorem quod magni, nam animi?</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => {
                        return(
                            <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h1>{element.title}</h1>
                                <button>{element.category}</button>
                            </div>
                        )
                    })
                }    
            </div> 
        </div>
      
    </section>
  )
}

export default Menu
