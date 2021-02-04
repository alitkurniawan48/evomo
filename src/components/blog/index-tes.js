import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col, Image, DropdownButton, Dropdown, Button } from 'react-bootstrap'
import '../../styles/global.css'
import '../../styles/styles-2.css'


const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query{
      allMediumPost(sort: {fields: [createdAt], order: DESC}) {
        edges {
          node {
            id
            title
            virtuals {
              subtitle
              previewImage {
                imageId
              }
            }
            createdAt
          }
        }
      }
    }    
  `)
  console.log(data.allMediumPost.edges)

  return (
    <Container>
      <Row class="space-top-50">
        <Col md={{ span: 3, offset: 9 }}>
          <DropdownButton id="dropdown-basic-button" variant="outline-secondary" title="Terbaru &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" >
            <Dropdown.Item href="#/action-1">Terbaru</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </Col >
      </Row >

      <Row className="justify-content-md-center section-pad-2">


        {data.allMediumPost.edges.map(item => {
          return (
            <div className="flex space-top-50">
              <Col md={{ span: 1, offset: 1 }} className="space-top-25">
                <Image src={`https://cdn-images-1.medium.com/fit/c/140/120/${item.node.virtuals.previewImage.imageId}`} width={200} height={200} />
              </Col>

              <Col md={{ span: 7, offset: 2 }}>

                <h3 className="txt-header-2 g-banner">{item.node.title}</h3>
                <p className="txt-20 grey">
                  {item.node.createdAt}
                </p>
                <p className="txt-20 normal">
                  {item.node.virtuals.subtitle}
                </p>
                <Link to="/blog-post">
                  <Button className="right btn-banner btn-subs">Detail</Button>
                </Link>
              </Col>

            </div>

          )
        })}
      </Row>

    </Container >
  )
}

export default IndexPage
