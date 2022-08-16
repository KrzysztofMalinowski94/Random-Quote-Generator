import React from "react";
import QuoteContainer from "../QuoteContainer";




import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export class Randtextgen extends React.Component{
    state ={
        isLoading: true,
        hasError: false,
        quotationData: {}
    }

    getQuote =async()=>{
        const result= await fetch('https://api.quotable.io/random')
        const data = await result.json()
        this.setState(()=>({quotationData: data}))
        console.log(data)
        return data
    }
    
    clickAction=()=>{
        this.getQuote()
    }

    componentDidMount(){
        this.getQuote()
    }

    render(){
        const {
            author,
            content
        } = this.state.quotationData
        return(
            <QuoteContainer
            author = {author}
            content = {content}
            clickAction = {this.clickAction}
            />
        )
    }
}

export default Randtextgen