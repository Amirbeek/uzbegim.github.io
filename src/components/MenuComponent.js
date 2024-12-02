import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../css/Menu.css'
const foodItems = [
    {
        "tabs": [
            {
                "id": "tab-1",
                "title": "COLD STARTERS",
                "icon": "leaf",
                "foods": [
                    {
                        "image": "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg",
                        "name": "ACHI-CHUK (Fresh Tomato and Onion Salad)",
                        "price": "10.0",
                        "description": "Freshly sliced tomatoes and onions sprinkled with chopped dill offering a light and refreshing taste of traditional Uzbek flavours.",
                        "compliment": "A perfect start to any meal with its light and refreshing notes!"
                    },
                    {
                        "image": "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg",
                        "name": "BAQLAJON ROLL (Char-Grilled Aubergine Roll)",
                        "price": "10.0",
                        "description": "Roasted aubergine filled with roasted peppers, aubergine, zucchini, and creamy mozzarella cheese. A delightful harmony of smokiness, sweetness, and smooth textures.",
                        "compliment": "A smoky, sweet delight with creamy richness in every bite!"
                    },
                    {
                        "image": "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg",
                        "name": "SARXIL SALAD (Fresh Salad)",
                        "price": "10.0",
                        "description": "A vibrant mix of diced tomatoes, cucumbers, crisp salad leaves, and sliced red onions. This refreshing dish awakens your palate with crisp textures and bright flavours.",
                        "compliment": "A burst of freshness that will brighten up your day!"
                    },
                    {
                        "image": "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg",
                        "name": "BAHOR SALAD (Spring Salad)",
                        "price": "10.0",
                        "description": "A seasonal favourite with a medley of fresh vegetables and aromatic herbs. Bringing the essence of spring to your table.",
                        "compliment": "A seasonal delight that brings the freshness of spring into every bite."
                    },
                    {
                        "image": "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg",
                        "name": "OLIVIA SALAD (Classic Olivier Salad)",
                        "price": "10.0",
                        "description": "A creamy, hearty salad of diced vegetables, pickles, and mayonnaise, enhanced with aromatic herbs. A rich and satisfying dish for lovers of classic flavours.",
                        "compliment": "A comforting classic that never goes out of style!"
                    },
                    {
                        "image": "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg",
                        "name": "HUMMUS (Classic Chickpea Dip)",
                        "price": "10.0",
                        "description": "A creamy blend of chickpeas, olive oil, and spices, finished with a sprinkle of paprika. Perfect as a smooth, savory starter.",
                        "compliment": "A silky, savory dip that adds the perfect touch to any meal!"
                    }
                ]
            },
            {
                "id": "tab-2",
                "title": "HOT STARTERS",
                "icon": "fire",
                "foods": [
                    {
                        "image": "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg",
                        "name": "MASTAVA (Uzbek Rice Soup)",
                        "price": "10.0",
                        "description": "A hearty Uzbek soup made with tender meat, fresh vegetables, rice, and aromatic spices. A warming taste of home-cooked comfort.",
                        "compliment": "A heartwarming soup that feels just like home!"
                    },
                    {
                        "image": "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg",
                        "name": "TOVUQ SHO’RVA (Chicken Soup)",
                        "price": "10.0",
                        "description": "Fragrant chicken soup with tender meat, garden vegetables, and fresh herbs. A soothing and nourishing way to begin your meal.",
                        "compliment": "A comforting classic, rich in flavour and nourishment."
                    },
                    {
                        "image": "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg",
                        "name": "QAYNATMA SHO’RVA (Traditional Broth)",
                        "price": "10.0",
                        "description": "Slow-cooked broth featuring tender meat, potatoes, and carrots. Offering simple yet deep, rustic flavours.",
                        "compliment": "A soul-satisfying broth that warms the heart!"
                    },
                    {
                        "image": "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg",
                        "name": "CHUCHVARA (Uzbek Dumpling Soup)",
                        "price": "10.0",
                        "description": "Traditional Uzbek dumplings filled with seasoned meat, served in a delicate broth. Each bite balances tender dough with a savory filling.",
                        "compliment": "The perfect balance of savoury and delicate in every bite!"
                    },
                    {
                        "image": "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg",
                        "name": "DO’LMA (Stuffed Leaves)",
                        "price": "10.0",
                        "description": "Grape or cabbage leaves stuffed with a savory mix of minced meat, rice, and herbs. Gently cooked to create a flavourful and aromatic dish.",
                        "compliment": "A beautifully fragrant dish that’s filled with goodness!"
                    },
                    {
                        "image": "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg",
                        "name": "NAXOT SHO’RAK (Warm Chickpea Salad)",
                        "price": "10.0",
                        "description": "Warm chickpeas mixed with tender meat, fresh herbs, and a light dressing. A hearty and healthy option infused with Uzbek tradition.",
                        "compliment": "A wholesome and satisfying salad that hits all the right notes!"
                    }
                ]
            },

            {
                "id": "tab-4",
                "title": "MAIN DISHES",
                "icon": "utensils",
                "foods": [
                    {
                        "image": "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg",
                        "name": "PLOV (Uzbek Pilaf)",
                        "price": "10.0",
                        "description": "A fragrant and hearty rice dish cooked with tender meat, carrots, onions, and aromatic spices. A signature dish of Uzbekistan.",
                        "compliment": "A rich, flavourful dish that’s a true taste of Uzbekistan!"
                    },
                    {
                        "image": "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg",
                        "name": "MANTI (Uzbek Dumplings)",
                        "price": "10.0",
                        "description": "Handmade dumplings filled with spiced minced meat, served with a dollop of sour cream. A comforting and delicious main dish.",
                        "compliment": "A perfect comfort dish that never disappoints!"
                    },
                    {
                        "image": "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg",
                        "name": "SHASHLIK (Grilled Skewers)",
                        "price": "10.0",
                        "description": "Grilled skewers of marinated meat, served with fresh salad and your choice of sides. The perfect choice for barbecue lovers.",
                        "compliment": "Grilled to perfection, bursting with smoky, juicy flavour!"
                    }
                ]
            }
        ]
    }
];


const MenuComponent = () => {
    const [activeTab, setActiveTab] = useState("tab-1");

    return (
        <div className="container-xxl py-5">
            <div className="">
                <div className="text-center">
                    <h5 className="section-title text-primary fw-normal">Food Menu</h5>
                    <h1 className="mb-5">Our Menu</h1>
                </div>
                {/* Tab Buttons */}
                <div className="container border-bottom mb-5 px-5 d-flex flex-column flex-sm-row justify-content-center">
                    <div className="row w-100">
                        {foodItems[0].tabs.map((tab) => (
                            <div key={tab.id} className="col-6 col-sm-4 mb-3">
                                <button
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`btn d-flex align-items-center text-start w-100 ${
                                        activeTab === tab.id ? "active-tab" : ""
                                    }`}
                                    style={{
                                        background: "none",
                                        border: "none",
                                        outline: "none",
                                        cursor: "pointer",
                                        fontWeight: "bold",
                                    }}
                                >
                                    <i className={`fa fa-${tab.icon} fa-2x text-primary`}></i>
                                    <div className="ps-3">
                                        <h6 className="mt-n1 hopsss mb-0">{tab.title}</h6>
                                    </div>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <Row>
                    <Col sm={12}>
                        {foodItems[0].tabs.map((tab) =>
                            activeTab === tab.id ? (
                                <div key={tab.id}>
                                    <Row className="g-4">
                                        {tab.foods.map((food, index) => (
                                            <Col lg={6} key={index}>
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        className="flex-shrink-0 img-fluid rounded"
                                                        src={food.image}
                                                        alt={food.name}
                                                        style={{ width: "80px" }}
                                                    />
                                                    <div className="w-100 d-flex flex-column text-start ps-4">
                                                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                            <span>{food.name}</span>
                                                            <span className="text-primary">{food.price}$</span>
                                                        </h5>
                                                        <small className="fst-italic">{food.description}</small>
                                                        {food.compliment && (
                                                            <span style={{ color: 'red', fontSize: 'smaller' }} className="mt-2">
                                                {food.compliment}
                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            ) : null
                        )}
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default MenuComponent;
