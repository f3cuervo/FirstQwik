import { component$ } from "@builder.io/qwik";

export interface SidebarProps{
    items:{route:string, name:string}[]
}

export const Sidebar = component$((props:SidebarProps)=>{
    return(
        <div>
            <ul>
                <li>item#1</li>
                <li>item#2</li>
                <li>item#3</li>
                <li>item#4</li>
                <li>item#5</li>
            </ul>
        </div>
    )
})