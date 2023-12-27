function Footer() {
  return (
    <div className="bg-black text-white px-5 py-10 flex flex-col">
      <div className=" flex flex-col md:flex-row justify-items-start md:px-10">
        <div className="flex flex-col font-bold cursor-default max-w-xs break-normal my-auto">
          <div className="flex mb-2">
            <img
              className="h-5 w-5 mr-2 my-auto"
              src="https://img.icons8.com/?size=512&id=104233&format=png"
              alt=""
            />
            <h1 className="my-auto text-2xl">MedVault</h1>
          </div>
          <p className=" text-sm font-normal">
            Empowering Healthcare: Your Reliable Partner in Secure Health Data
            Management.
          </p>
        </div>
      </div>
      <div className="flex flex-col text-center mt-10">
        {/* <p>made with ❤️ by engineer for doctors.</p> */}
        <p className="md:text-right"> © 2023 All Rights Reserved </p>
      </div>
    </div>
  );
}

export default Footer;
