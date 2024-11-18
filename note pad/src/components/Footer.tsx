

function Footer() {
    const getyear = new Date().getFullYear();
  return (
   
    <div className="mt-auto sm:sticky">
        <footer className=" absolute text-center bottom-0 w-full inset-x-0 ">
      <p className="text-gray-500 " >© {getyear}</p>  
        </footer>
    </div>
  )
}

export default Footer