
export function Product({ pic, name, deleteButton, editButton, procedure1, procedure2, procedure3, preparedby, rating }) {
    return (
        <div>
            <section>
                <div className="laptop-container">
                    <div className="mainbody">
                        <img className="image" src={pic} alt={name} />
                        <h5 style={{color:"crimson", fontWeight:"bold",}} className="name">{name}</h5>
                        <p className="price">Rating: ⭐{rating}</p>
                        <div className="about">
                            <h5 style={{fontWeight:"bold",color:"rgb(13,110,253"}}>Procedure : </h5>
                            <ul>
                                <li> {procedure1} </li>
                                <li> {procedure2} </li>
                                <li> {procedure3} </li>
                            </ul>
                            <p style={{color:"crimson", fontWeight:"bold"}}>By - {preparedby}</p>
                            
                        </div>
                        <div style={{marginTop:"10px"}}>{editButton} {deleteButton}</div>
                    </div>
                </div>
            </section>
        </div>
    );
}
