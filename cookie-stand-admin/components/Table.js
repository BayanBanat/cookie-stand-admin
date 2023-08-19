import hourlySalesData from '@/data'

export default function Table({ addCookies }) {
  const timeSlots = [
    "6am", "7am", "8am", "9am", "10am", "11am", "12pm",
    "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "Total"
  ];

  return (
    <>
      {addCookies.length > 0 ? (
        <table className='w-1/2 p-8 mx-auto my-8 text-xl center'>
          <thead>
            <tr>
              <th className='bg-green-600 border border-black'>Location</th>
              {timeSlots.map((slot, index) => (
                <th key={index} className='bg-green-600 border border-black'>{slot}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {addCookies.map((obj, index) => (
              <tr key={obj.id}>
                <td className='bg-green-600 border border-black'>{obj.location}</td>
                {hourlySalesData.map((sales, index) => (
                  <td key={index} className='bg-green-600 border border-black'>{sales}</td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className='font-bold bg-green-600 border border-black'>Total</td>
              {hourlySalesData.map((sales, index) => (
                  <td key={index} className='bg-green-600 border border-black'>{sales*addCookies.length}</td>
                ))}
            </tr>
          </tfoot>
        </table>
      ) : "No Cookie Stands Available"}
    </>
  );
}
