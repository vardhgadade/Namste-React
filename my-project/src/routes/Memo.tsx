import { Demo } from "../Hooks/usememo/demo";
import { createFileRoute } from "@tanstack/react-router";

export const Route=createFileRoute("/Memo")({
    component:Memo
})

function Memo(){
    return(
        <>
        <Demo />
        </>
    )
}