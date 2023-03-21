import "./index.scss"
import { pokemons } from "../../data/data"

function Main() {
  return (
    <>
      <main>
        <div className="container">
          <div className="cards">
            {pokemons.length > 0 ? (
              pokemons.map((item) => {
                return (
                  <>
                    <div className="card" key={item.id}>
                      <div className="card__img">
                        <img src={item.img} alt="img" />
                      </div>
                      <div className="card__body">
                        <div className="card__body--title">
                          <h3>{item.name}</h3>
                        </div>
                        <div className="card__body--gross">
                          <p>{item.type}</p>
                        </div>
                        <div className="card__body--info">
                          <p>
                            {item.weight} {item.height}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })
            ) : (
              <h1>NOT FOUND</h1>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
