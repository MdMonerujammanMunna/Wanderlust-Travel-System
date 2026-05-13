import CardDesign from "@/UI/Card";

const DestinationPage = async () => {
    const res = await fetch("http://localhost:5000/AllData")
    const data = await res.json()

    return (
        <>
            <div className="my-20 px-10">
                <div className="space-y-4">
                    <h1 className='text-6xl font-medium'>Explore All Destinations</h1>
                    <p className='text-[#6C696D] text-xl'>Find your perfect travel experience from our curated collection</p>
                </div>
                <div className="mt-4">
                    <p className='text-[#6C696D] text-xl'>Showing <span className="font-bold text-black">{data.length}</span> Destinations</p>
                </div>
                <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                    {
                        data.map(singledata => <CardDesign key={singledata._id} singledata={singledata}></CardDesign>)
                    }
                </div>
            </div>
        </>
    );
};

export default DestinationPage;