import React,{useState} from 'react'

export const ItemInput = () => {
    const [GSTIN,setGSTIN]=useState("")
    const [PartyName,setPartyName]=useState("")
    const [PhoneNo, setPhone] = useState("")
    const [Address, setAddress] = useState("")

    const handleForm=()=>{

    }

  return (
    <div>
    <div class="py-3 px-3 flex"><h1 class='text-4xl font-light '>Add Customer</h1></div>
    <div className="isolate bg-white p-4 mb-5 rounded-lg ml-5 mr-5">


        <form action="#" method="POST" onSubmit={handleForm} className="mx-auto  px-6 sm:mt-10">
            <div className="sm:col-span-2">
                <label class="  block  tracking-wide  text-gray-700 text-lg text-left font-bold mb-2" for="grid-first-name">
                Item name
                </label>
                <div className="mt-2.5">
                    <input
                   
                        type="text"
                        name="company"
                        id="company"
                        autoComplete="organization"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 mt-3 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                    <label class="  block  tracking-wide text-left text-gray-700 text-lg font-bold mb-2" for="grid-first-name">
                    Selling Price
                    </label>
                    <div className="mt-2.5">
                        <input
                      
                            type="number"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div>
                    <label class="block  tracking-wide text-left text-gray-700 text-lg font-bold mb-2" for="grid-first-name">
                    Purchase Price
                    </label>
                    <div className="mt-2.5">
                        <input
                       
                            type="number"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
 
               
                
                
 
            </div>
            

            <div className="sm:col-span-2">
                <label class="  block  tracking-wide  text-gray-700 text-lg text-left font-bold mb-2" for="grid-first-name">
                Units
                </label>
                <div className="mt-2.5">
                 
                    <select class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="" id="">
                        <option value="Pieces">Pieces(PCS)</option>
                        <option value="Box">Box</option>
                        <option value="Kilogram">Kilogram(Kg)</option>
                        <option value="Gram">Gram(g)</option>
                        <option value="Meter">Meter(M)</option>
                        <option value="Liter">Liter(L)</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 mt-3 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                    <label class="  block  tracking-wide text-left text-gray-700 text-lg font-bold mb-2" for="grid-first-name">
                    Opening Stock

                    </label>
                    <div className="mt-2.5">
                        <input
                        onChange={(e)=>setPartyName(e.target.value)}
                            type="number"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div>
                    <label class="block  tracking-wide text-left text-gray-700 text-lg font-bold mb-2" for="grid-first-name">
                    Low Stock
                    </label>
                    <div className="mt-2.5">
                        <input
                        onChange={(e)=>setPhone(+e.target.value)}
                            type="number"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
 
               
                
               
 
            </div>
           


            
            <div className="grid grid-cols-1 mt-3 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                    <label class="  block  tracking-wide text-left text-gray-700 text-lg font-bold mb-2" for="grid-first-name">
                    HSN Code
                    </label>
                    <div className="mt-2.5">
                        <input
                        onChange={(e)=>setPartyName(e.target.value)}
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div>
                    <label class="block  tracking-wide text-left text-gray-700 text-lg font-bold mb-2" for="grid-first-name">
                    GST %
                    </label>
                    <div className="mt-2.5">
                        {/* <input
                        onChange={(e)=>setPhone(+e.target.value)}
                            type="number"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        /> */}
                        <select name="" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="">
                            <option value="GST @ 0%">GST @ 0%</option>
                            <option value="GST @ 0.1%">GST @ 0.1%</option>
                            <option value="GST @ 0.25%">GST @ 0.25%</option>
                            <option value="GST @ 3%">GST @ 3%</option>
                            <option value="GST @ 5%">GST @ 5%</option>
                            <option value="GST @ 6%">GST @ 6%</option>
                            <option value="GST @ 7.5%">GST @ 7.5%</option>
                            <option value="GST @ 12%">GST @ 12%</option>
                            <option value="GST @ 18%">GST @ 18%</option>
                            <option value="GST @ 28%">GST @ 28%</option>
                        </select>
                    </div>
                </div>
 
               
                
                <div className="sm:col-span-2">
                    <label class="block  tracking-wide text-left text-gray-700 text-lg font-bold mb-2" for="grid-first-name">
                        Address
                    </label>
                    <div className="mt-2.5">
                        <textarea
                        onChange={(e)=>setAddress(e.target.value)}
                            name="message"
                            id="message"
                            rows={4}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            defaultValue={''}
                        />
                    </div>
                </div>
 
            </div>
            <div className="mt-10">
                <button
                    type="submit"
                    className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    ADD
                </button>
            </div>




        </form>
    </div>
</div>
  )
}
