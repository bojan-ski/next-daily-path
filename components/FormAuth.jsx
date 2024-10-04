const FormAuth = ({ handleSubmit, btnTitle, children }) => {  
  return (
    <form onSubmit={handleSubmit}>
      {children}

      <button type="submit" className="bg-orange-300 rounded-md px-5 py-2 mt-4 font-bold hover:bg-orange-400">
        {btnTitle}
      </button>
    </form>
  )
}

export default FormAuth