import React from 'react'
import { Pagination, Row, Col } from 'antd'
import { PlayCircleOutlined } from '@ant-design/icons'
import './interviewList.css'

const InterviewList: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1)
  const videosPerPage = 12
  const totalVideos = 26 // Assuming you have a total of 26 videos

  const handleChangePage = (page: number) => {
    setCurrentPage(page)
  }

  const renderVideos = () => {
    const startIndex = (currentPage - 1) * videosPerPage
    const endIndex = Math.min(startIndex + videosPerPage, totalVideos)

    const videos = []
    for (let i = startIndex; i < endIndex; i++) {
      videos.push(
        <Col key={i} span={6}>
          <div className='video-thumbnail'>
            <div className='thumbnail-image'>
              <img
                src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
                alt={`Video Thumbnail ${i}`}
              />
            </div>
            <div className='play-icon'>
              <PlayCircleOutlined />
            </div>
            <p className='user-info'>Team 3: Bear</p>
          </div>
        </Col>
      )
    }

    return videos
  }

  return (
    <>
      <Row gutter={[16, 16]}>{renderVideos()}</Row>

      <Pagination
        current={currentPage}
        pageSize={videosPerPage}
        total={totalVideos}
        onChange={handleChangePage}
      />
    </>
  )
}

export default InterviewList
