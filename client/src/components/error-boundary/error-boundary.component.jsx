import React from "react";
import {GiBrokenHeart} from 'react-icons/gi'
// import {ErrorImageOverlay,ErrorImageContainer,ErrorImageText} from './error-boundary.styles';

class ErrorBoundary extends React.Component {
    constructor(){
        super();
        this.state={
            hasError:false
        }
    }
    static getDerivedStateFromError (error) {
        return {
            hasError:true
        }
    }
    componentDidCatch(error,errorInfo){
        console.log(error);
        // logErrorToMyService(error,errorInfo)
    }

    render(){
        if(this.state.hasError){
            return <div className="error-boundary-container">
            <p>Sorry this page is broken. Please try again later.</p>
            <GiBrokenHeart/>
            </div>
            // return <ErrorImageOverlay>
            //     <ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png' />
            //     <ErrorImageText>Sorry this page is broken</ErrorImageText>
            // </ErrorImageOverlay>

        }
        return this.props.children
    }
}


export default ErrorBoundary