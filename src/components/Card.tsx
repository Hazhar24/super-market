import { DataCard } from "../Data/DataCard"

export default function Card() {
     return (
          <>
               {DataCard.map((item) => (
                    <div className="CardMain">
                         <div className="CardMainLine">
                              <div className="CardSpan">
                                   <span className="CardItem block">{item.name}</span>
                                   <span className="CardItem block text-lg text-center font-medium">{item.price}</span>
                                   <div className="flex pt-3">
                                        <span className=" border-b px-4 text-gray-400">{item.date}</span>
                                        <span className=" border-b px-4 text-gray-400">{item.ditali}</span>
                                   </div>
                              </div>
                              <div><img src={item.img} className="CardImg" alt="" /></div>
                         </div>
                    </div>
               ))}
          </>
     )
}
