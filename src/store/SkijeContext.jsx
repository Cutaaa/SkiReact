import React,{useState} from "react"


export const SkijeContext=React.createContext({

    skije:[],
    dodajSkije:()=>{},
    ukloniSkije:()=>{},
    ukupanBrojSkija:0

})



export const SkijeProvider=(props)=>{
    const [skije,setSkije]=useState([]);
const [ukupanBrojSkija,setUkupanBrojSkija]=useState(0);


const dodajSkije=(skije)=>{
    const nadjeneSkije=skije.findIndex(s=>s.id===skije.id);
    if(nadjeneSkije!==-1){
        const s=skije[nadjeneSkije];
        s.brojPonavljanja+=skije.brojPonavljanja;
        skije[nadjeneSkije]=s;
        setSkije(skije);
    }else{
        setSkije(prevSkije=>{
            return [...prevSkije,skije];
        });
    }
    
    setUkupanBrojSkija(prevValue=>prevValue+1);
}

const ukloniSkije=(id)=>{
    const nadjene=skije.findIndex(s=>s.id===id);
    console.log(nadjene);

    if(nadjene==-1){
        return;
    }

    const skije=skije[nadjene];
    
    if(skije.brojPonavljanja===1){

    const filterSkije=skije.filter(s=>s.id!==id);
    setSkije(filterSkije);

    }else{
    const prevSkije=[...skije];
    skije.brojPonavljanja-=1;
    prevSkije[nadjene]=skije;
    setSkije(prevSkije);

}
    setUkupanBrojSkija(prevValue=>prevValue-1);
}

const skijeValue={
    skije:skije,
    dodajSkije:dodajSkije,
    ukloniSkije:ukloniSkije,
    ukupanBrojSkija:ukupanBrojSkija

}
    return <SkijeContext.Provider value={skijeValue}>
        {props.children}
    </SkijeContext.Provider>
}