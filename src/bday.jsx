import "./bday.css";
import data from "./data.js";
import { useState,useEffect} from "react";
const Bday=()=>
{
    const [value,Setvalue]=useState(data);
    const [status,Setstatus]=useState(false);
    const Clear=()=>
    {
        Setvalue([]);
    }

    const RemoveItem = (id) =>
    {
        let newPeople = value.filter((data) => data.id !== id);
        Setvalue(newPeople);
    }

    useEffect(()=>{
        const Alert=()=>
        {
            const date= new Date();
            var people_details={
                date_array : [],
                month_array:[],
                name:[],
            }
            const {date_array,name,month_array}=people_details;
            
            {value.map((data)=>{
                name.push(data.name);
                date_array.push(data.date.split("/")[0]);
                month_array.push(data.date.split("/")[1]);
            })}
            var sample =value;

            for(let i=0;i<name.length;i++)
            {
                if(date.getDate()== Number(date_array[i]) && (date.getMonth()+1) == Number(month_array[i]))
                {
                    alert(`Wish ${name[i]} a Happy birthday`);
                    sample[i].age=sample[i].age+1;
                }
            }
            Setvalue(sample);
        }
        if(!status)
        {
        Alert();
        Setstatus(true)

        }
    },[]);

    return(
        <>
        <article>
            <div className="bday-title-cnt"><h2>{value.length} Birthdays Today</h2></div>
            <div className="outer-card">
                <div>
                    {value.map((data)=>{
                        return (
                        <div className="inner-card"  key={data.id}>
                            <section className="detail-section">
                                <img  className="logo" src={data.img} alt={data.name}/>
                                <section className="detail">
                                    <h2 className="name">{data.name}</h2>
                                    <span className="age">{data.age} years</span><br/> 
                                </section>
                            </section>
                            <button className="btn" onClick={()=>{RemoveItem(data.id)}}>Clear</button>
                        </div>
                        )
                    })}
                </div>
                <button onClick={Clear} className="btn-all">Clear ALL</button>
            </div>
        </article>    
        </>
    )
}
export default Bday;