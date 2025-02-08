type GreetProps = {
    name: string
}
// if we pass any other data type other than string 
// than it will give us compile time error
export const  Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>
                Welcome ${props.name}! 
                you have 10 Unread messages
            </h2>
        </div>
    )   
}