import WhyIamHereList from "../core/WhyIamHereAuthList";

  const LookingforAuth = () => {
  
  
    return (
      <div className="flex  justify-between flex-col px-6  pb-4">
        <form className="flex w-full flex-col gap-4">
        
          <WhyIamHereList setSlideAvailable={undefined} setSlideUnAvailable={undefined} user={undefined}/>
  
        </form>
      </div>
    );
  };
  
  export default LookingforAuth;
  
