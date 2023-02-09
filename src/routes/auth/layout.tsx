import { component$, Slot } from "@builder.io/qwik";

 export default component$(()=>{
    return(
        <div>
            <div>Prueba</div>
            <Slot/>
        </div>
    )
 })