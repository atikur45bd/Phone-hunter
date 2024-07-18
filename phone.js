const loadPhone = async (searchText='a') => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones);
}

const displayPhones = phones => {
    // console.log(phones)
    const phoneContainer= document.getElementById('phones-container');
    phoneContainer.innerText='';
    // display show all button if phone grettar then 12
    const showAllButton= document.getElementById('show-all-button');
    if(phones.length>12)
    {
        showAllButton.classList.remove('hidden');

    }
    else
    {
        showAllButton.classList.add('hidden');
    }
    phones= phones.slice (0,12);
    phones.forEach(phone => {
        console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100  shadow-xl`;
        phoneCard.innerHTML = `
        
        <figure>
            <img src="${phone.image}"
                        alt="Phone" />
        </figure>
        <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions ">
            <button class="btn btn-primary">Buy Now</button>
        </div>
        `;
        
        phoneContainer.appendChild(phoneCard);

    });
    // handel search button
    
}
const handelSearch = () =>{
    const searchField= document.getElementById('search-field');
    const searchText= searchField.value;
    loadPhone(searchText);
    
}
loadPhone();