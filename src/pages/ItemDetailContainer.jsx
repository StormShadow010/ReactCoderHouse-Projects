import { useParams } from "react-router-dom";
import { useGetProductById } from "../hooks/useProducts";

// Ant design
import { Col, Row } from 'antd';

// Styles
import "../styles/ItemDetailContainer.scss"

// Icons
import Rating from "../assets/icons/estrella.png"

export const ItemDetailContainer = () => {
    const { id } = useParams()
    const { productData } = useGetProductById(id)

    const Genres = () => {
        return (
            <div className="infoGenre">
                {productData?.genres?.map((genre) => {
                    return (
                        <p key={genre.id}>{genre.name}</p>
                    )
                }) || <p>No genres found</p>}
            </div>
        )
    }

    const Platforms = () => {
        return (
            <div className="infoPlatform">
                {productData?.parent_platforms?.map((platform) => {
                    return (
                        <p key={platform.platform.id}>{platform.platform.name}</p>
                    )
                }) || <p>No platforms found</p>}
            </div>
        )
    }

    return (
        <div className="mainContainer">
            <Row>
                <Col xs={24} md={{ span: 10, offset: 2 }} className="imageContainer">
                    <img src={productData?.background_image} alt="" />
                </Col>
                <Col xs={24} md={{ span: 10, offset: 1 }} className="infoContainer">
                    <div className="infoTitle">
                        <p>{productData?.name}</p>
                    </div>
                    <div className="infoGenres">
                        <h3>Genres</h3>
                        <Genres />
                    </div>
                    <div className="infoPlatforms">
                        <h3>Platforms</h3>
                        <Platforms />
                    </div>
                    <div className="infoRating">
                        <h3>Rating</h3>
                        <div className="RatingCount">
                            <img src={Rating} alt="" width={70} height={70} />
                            <p>{productData.rating}</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}