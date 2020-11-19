import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native';
import SearchBar from './app/components/SearchBar';
import Screen from './app/components/Screen';
import BlockCard from './app/components/BlockCard';
import FeaturedNews from './app/components/FeaturedNews';
import SmallCard from './app/components/SmallCard'
import BreakingNews from './app/components/BreakingNews';
import data from './fakeData'
import TechNews from './app/components/TechNews';
import FlatCard from './app/components/FlatCard';
import PoliticalNews from './app/components/PoliticalNews';
import newsApi from './app/apis/newApi'
import VerticalList from './app/components/VerticalList';

export default function App() {
  
  const [featuredNews, setFeaturedNews] = useState({})
  const [politicalNews, setPoliticalNews] = useState([])
  const [breakingNews, setBreakingNews] = useState([])
  const [techNews, setTechNews] = useState([])
  const [entertainNews, setEntertainNews] = useState([])

  const filterByCat = (data, cat) => {
    return [...data].filter(item => item.category === cat)
  }

  const filterfeatured = (data) => {
    return [...data].filter(item => item.featured === 'on').reverse()[0]
  }

  const filterNews = async() => {
    const allNews = await newsApi.getAll()
    setFeaturedNews(filterfeatured(allNews));
    setBreakingNews(filterByCat(allNews, "breaking-news"));
    setEntertainNews(filterByCat(allNews, "entertainment"));
    setPoliticalNews(filterByCat(allNews, "political"));
    setTechNews(filterByCat(allNews, "tech"))
  }

  useEffect(() => {
    filterNews()
  }, [])

  return (
    <Screen>
      <SearchBar />
      <FeaturedNews item={featuredNews} />
      <BreakingNews data={breakingNews} />
      <VerticalList title="entertainment" data={entertainNews} />
      <TechNews data={techNews} />
      <PoliticalNews data={politicalNews} />
    </Screen>  
  )
}
