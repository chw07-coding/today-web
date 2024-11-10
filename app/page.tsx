export default function Home() {
  return (
      <div>
          <Mybutton name="um" nickname="hioCoffee" today ={new Date()} />
      </div>    
  );
}

// function Mybutton({
//   name
// }: {
//   name: string
// }){
//   return <button> i am {name}</button>
// }

type Tparams={
  name: string
  nickname: string
  today: Date
}

function Mybutton(params:Tparams){
  return(
    <div className="bg-indigo-500 text-xl w-[200px] h-[100px]" style ={{backgroundColor: "rgb(79 70 229)"}}>
      i am {params.name}. my nickname is {params.nickname}.{} i am {params.today.getDate()}
    </div>
  )
   
}