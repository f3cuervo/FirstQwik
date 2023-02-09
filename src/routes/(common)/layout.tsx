import { component$, Slot } from "@builder.io/qwik";
import Header from "~/components/header/header";
import { Sidebar } from "~/components/sidebar/sidebar";

export default component$(()=>{

    const MOCK_PROPS = {
        items:[{name:'trending',route:'/trending'}]
    }
    return(
        <div>
            <Header/>
            <Sidebar items={MOCK_PROPS.items} />
            <Slot/>
        </div>
    )
})