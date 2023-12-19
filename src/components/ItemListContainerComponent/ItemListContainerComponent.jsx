/* eslint-disable react/prop-types */
import "./ItemListContainerComponent.scss"

//Ant Design 
import { InfoCircleOutlined } from '@ant-design/icons';
import { Card } from 'antd';
const { Meta } = Card;

import { Link } from "react-router-dom";

//Platforms
// const platformsData = [
//     {
//         platform: "PC",
//         image: "../../assets/platforms/pc.png",
//     },
//     {
//         platform: "macos",
//         image: "../../assets/platforms/macos.png",
//     },
//     {
//         platform: "nintendo",
//         image: "../../assets/platforms/nintendo.png",
//     },
//     {
//         platform: "playstation",
//         image: "../../assets/platforms/playstation.png../../assets/platforms/macos.png",
//     },
//     {
//         platform: "xbox",
//         image: "../../assets/platforms/xbox.png",
//     },
// ]

export const ItemListContainerComponent = ({ productsData }) => {

    const Platforms = ({ platforms }) => {
        // console.log(platforms)
        return (
            <div style={{ display: "flex" }}>
                {platforms.map((platform) => {
                    return (
                        <p key={platform.platform.id}>{platform.platform.name},</p>
                    );
                })}
            </div>
        )
    }

    const PriceGame = () => {
        const Price = Math.round((Math.random() * (20 - 5) + 5) * 1000) / 1000
        return (
            <p>${Price}</p>
        )
    }

    return (

        <div className="productsContainer">
            {productsData.map((product) => {
                return (
                    <div key={product.id} className="itemProduct">
                        <Card
                            style={{
                                width: 350,
                            }}
                            cover={
                                <img
                                    alt="example"
                                    src={product.background_image}
                                    width={350}
                                    height={200}
                                    style={{ objectFit: 'cover' }}
                                />
                            }
                            actions={[
                                <Link to={`/item/${product.id}`} key="setting"><InfoCircleOutlined /></Link>,
                                <PriceGame key="price" />,
                            ]}
                        >
                            <Meta
                                title={product.name}
                                description={<Platforms platforms={product.parent_platforms} />}
                            />
                        </Card>
                    </div>
                );
            })}
        </div>
    )
}
