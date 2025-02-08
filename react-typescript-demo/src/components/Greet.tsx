type GreetProps = {
    name: string
    messageCount: number
    isLoggedIn: boolean
}
// if we pass any other data type other than string 
// than it will give us compile time error
export const  Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>
                {props.isLoggedIn ? 
                `Welcome ${props.name}! 
                you have ${props.messageCount} Unread messages`
                : 
                `Please login to continue`}
                
            </h2>
        </div>
    )   
}