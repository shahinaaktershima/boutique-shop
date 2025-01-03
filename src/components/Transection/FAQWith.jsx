

const FAQWith = () => {
    return (
        <div className='lg:max-w-[400px] w-full my-10'>
        <h2 className='text-2xl font-bold text-center py-4'>FAQ:</h2>
       

<div className="collapse collapse-arrow bg-base-200">
<input type="radio" name="my-accordion-2" /> 
<div className="collapse-title  font-medium">
How can I withdraw?
</div>
<div className="collapse-content"> 
<p>It is very easy to do.The procedure will take a couple of minutes.</p>
<p>01.Open the trade execution window and click on the green withdraw in the upper right corner on the top.</p>
<p>02.After ,it is neccessary to choose a method of depositing the account.</p>
<p>03.Indicate the currency</p>
<p>04.enter the amount of deposit</p>
<p>05.Fill out the form by entering the requested payment system</p>
<p>06.Make a payment.</p>
</div>
</div> 
<div className="collapse collapse-arrow bg-base-200">
<input type="radio" name="my-accordion-2" /> 
<div className="collapse-title  font-medium">
What is the minimum withdrawal amount?
</div>
<div className="collapse-content"> 
<p>The minimum withdrawal amount is 10 US dollars. </p>
</div>
</div> 
<div className="collapse collapse-arrow bg-base-200">
<input type="radio" name="my-accordion-2" /> 
<div className="collapse-title  font-medium">
Is there any fee for depositing and withdrawing funds from the account?
</div>
<div className="collapse-content"> 
<p>No .The company does not charge any fee for either the deposit or for the withdrawal options.</p>
</div>
</div> 

    </div>
    );
};

export default FAQWith;