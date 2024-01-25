import React, { useEffect, useState } from 'react'
import { Pagination, Row, Col, Input, Select, Flex } from 'antd'
import { PlayCircleOutlined } from '@ant-design/icons'
import { getInterviewsList, getTeams } from 'api'
import { InterviewType, ReferenceType } from 'api/types'
import './interviewList.css'

const { Search } = Input

const InterviewList: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1)
  const [teams, setTeams] = useState([])
  const [interviews, setInterviews] = useState<InterviewType[]>([])
  const videosPerPage = 12
  const totalVideos = interviews.length // Assuming you have a total of 26 videos

  useEffect(() => {
    ;(async () => setTeams((await getTeams()).data))()
    setInterviews(getInterviewsList())
  }, [])

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
            <p className='user-info'>
              {interviews[i].name}: {interviews[i].user_id}
            </p>
          </div>
        </Col>
      )
    }
    return videos
  }

  const handleSearch = () => {}

  const handleTeamFilter = () => {}

  return (
    <>
      <Flex
        gap='middle'
        justify='space-evenly'
        align='center'
        style={{ marginBottom: '32px', marginTop: '32px' }}
      >
        <div>
          <span>Filter: </span>
          <Select
            style={{ width: '200px' }}
            allowClear
            onChange={handleTeamFilter}
          >
            {teams &&
              teams.map((team: ReferenceType) => (
                <Select.Option key={team.id} value={team.id.toString()}>
                  {team.name}
                </Select.Option>
              ))}
          </Select>
        </div>
        <div>
          <Search
            placeholder='Search for username'
            allowClear
            enterButton='Search'
            onSearch={handleSearch}
          />
        </div>
      </Flex>
      <Row style={{ margin: '0' }} gutter={[16, 16]}>
        {renderVideos()}
      </Row>

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
