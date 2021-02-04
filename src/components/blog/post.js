import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap'


const Post = () => {
  const data = useStaticQuery(graphql`
    query {
      allMediumPost(sort: { fields: [createdAt], order: DESC }) {
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
            author {
              name
            }
          }
        }
      }
    }
  `)
  console.log(data.allMediumPost.edges)

  return (
    <Container fluid>

      <Row className="section-pad-2 bg-post">
        <Col md={{ span: 10, offset: 1 }}>
          <br /><br /><br /><br /><br />
        </Col>
      </Row>

      <Row class="space-top space-bot">
        <Col md={{ span: 10, offset: 1 }} >
          <h3 className="txt-header-2 g-banner">Evo Fishery: Membantu Petambak Meningkatkan Hasil Budidaya Udang</h3>
          <p className="txt-20 grey">11 January 2021</p>

          <p className="txt-20 normal">Hallo Petambak Indonesia,

          Peningkatan pada hasil panen merupakan impian semua petambak, namun seringkali di dalam proses menuju panen sangat banyak tantangan yang dirasakan oleh setiap petambak.

          Budidaya udang merupakan sebuah proses panjang. Diawali dari persiapan kolam, dilanjutkan persiapan air, tebar benur, pemberian pakan, manajemen kualitas air, pemberian treatment untuk kesehatan udang, sampling pertumbuhan udang, dan berakhir pada panen.

          Tiap proses ini memerlukan pemahaman kondisi kolam, air, dan udang. Namun, banyak hal yang menjadi tantangan bagi petambak dalam memulai bisnis dan budidaya udang salah satunya adalah penurunan produktivitas panen akibat menurunnya kualitas lingkungan.

          Kurangnya pengetahuan petambak terhadap manajemen kualitas air dan treatment yang benar untuk pertumbuhan udang menyebabkan hasil panen menurun. Di sisi lain, banyaknya jumlah kolam menyebabkan petambak sulit untuk memantau secara rutin jika dilakukan secara manual.

          Kunci keberhasilan dari budidaya udang terlihat dari kualitas air, udara dan jumlah pakan yang seimbang. Beberapa parameter kualitas air seperti pH, salinitas, DO, suhu dan parameter lainnya harus dipantau dan dijaga agar perkembangan udang tidak terganggu.

          Di sisi lain, kualitas air dapat menurun baik itu pada satu jenis parameter atau beberapa parameter secara berantai. Hal ini menyebabkan petambak harus mengambil keputusan secara tepat dan cepat untuk meminimalisir kegagalan panen.

          Pengukuran kualitas air, udara dan jumlah pakan yang seimbang sangat mungkin dilakukan secara tepat dan akurat dengan sistem monitoring. Sistem ini membantu petambak dengan menampilkan visualisasi data dan tren data. Tren data adalah informasi bagi petambak dalam manajemen maupun saat menemui masalah pada tambaknya.

          Dengan data pengambilan keputusan terhadap keadaan tambak akan lebih efektif dan efisien. Hal ini juga dapat meminimalisir biaya operasional budidaya serta dapat meningkatkan profit dari hasil panen yang dihasilkan.

          Berbicara mengenai sistem monitoring, Evo Fishery siap untuk membantu petambak seluruh Indonesia dalam memantau, menganalisa dan mengoptimalkan hasil budidaya udang.

          Melalui sistem monitoring dari Evo Fishery petambak bisa memonitoring kondisi lingkungan tambak sesuai parameter yang telah ditetapkan sebelumnya, seperti kualitas air, konsumsi pakan, dan kualitas udara.

          Evo Fishery merupakan produk dari Evomo yang bergerak di sektor perikanan dengan memanfaatkan teknologi IoT. Pemanfaatan teknologi IoT pada sektor perikanan penting untuk memudahkan petambak memonitoring lingkungan tambak kapanpun dan dimanapun.

          Pemanfaatan IoT memungkinkan terwujudnya integrasikan antara sensor dan robotisasi untuk otomasi dengan para petambak secara realtime dan memberikan data-data yang akurat untuk menjadi rekomendasi tindakan selanjutnya.

          Lebih jauh petambak dapat memantau jalannya budidaya,apa yang terjadi di tambak, performa budidaya, dan juga performa teknisi tambak di lapangan. Menarik bukan?

          Untuk lebih mengenal sistem monitoring pada produk Evomo lebih luas lagi, kunjungi kami di https://evomo.id/ untuk informasi lebih detail.

          Written by
          Jeager
          Meningkatkan efektivitas produksi dengan Industrial Internet of Things untuk bersaing di era Industri 4.0
</p>
        </Col>
      </Row>


    </Container >
  )
}

export default Post