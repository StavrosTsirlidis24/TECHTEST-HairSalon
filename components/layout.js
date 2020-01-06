import HEAD from 'next/head';

const Layout = props =>{
return (

<>
            
    <HEAD>   
        <link href="https://fonts.googleapis.com/css?family=Playfair+Display|Roboto&display=swap" rel="stylesheet"></link>
    </HEAD>
    <style jsx global>{`body{margin:0px}`}</style>
    <script src="https://kit.fontawesome.com/cc6d4c9dc0.js" crossOrigin="anonymous"></script>

    {props.children}
</>
)

}

export default Layout