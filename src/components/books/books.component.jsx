import React from "react";

import "./books.styles.scss";

import Book from "./book/book.component";

const books = [
  {
    image: "https://i.ibb.co/pXTtV7S/clt.jpg",
    link: "https://www.goodreads.com/book/show/232438.Creating_a_Life_Together",
    title:
      "Creating a Life Together: Practical Tools to Grow Ecovillages and Intentional Communities",
    author: "Diana Leafe Christian",
    types: "I can share EBOOK and AUDIOBOOK",
    description:
      "Book provides practical information on how to build a community. Written by an editor of 'Communities' magazine",
    downloads: [{title: 'epub', link: 'http://31.42.184.140/main/2568000/e722eb22ba7df39d2fcc826b521bb356/Adams%2C%20Patch%2C%20Christian%2C%20Diana%20Leafe%20-%20Creating%20a%20Life%20Together-New%20Society%20Publishers%20%282010%29.epub'}, {title: 'pdf', link:'file:///tmp/mozilla_dzik0/Diana%20Leafe%20Christian%20-%20Creating%20a%20Life%20Together_%20Practical%20Tools%20to%20Grow%20Ecovillages%20and%20Intentional%20Communities%20(2003).pdf'}]
  },
  {
    image: "https://i.ibb.co/vmHgZjJ/51-Khd-Qn-Mtw-L-SX382-BO1-204-203-200.jpg",
    link:
      "https://www.goodreads.com/book/show/5718094-beyond-you-and-me?from_search=true&from_srp=true&qid=Xg8UhmIXNX&rank=1",
    title: "Beyond You And Me: Inspiration And Wisdom For Community Building",
    author: " Kosha Anja Joubert (Editor), Robin Alfred (Editor)",
    types: "I can share EBOOK",
    description:
      "Articles - tips on topics of building community and living in a community. Less practical (building, money, land) and focused on connections, feelings. Articles by different authors.",
      downloads: [{title: 'pdf', link: 'file:///tmp/mozilla_dzik0/Kosha%20Anja%20Joubert,%20Robin%20Alfred%20-%20Beyond%20You%20and%20Me_%20Inspiration%20and%20Wisdom%20for%20Community%20Building-Permanent%20Publications%20(2007).pdf'}],
  },
  {
    image: "https://i.ibb.co/QD2rcbg/download.jpg",
    link:
      "https://www.goodreads.com/book/show/4443.The_Different_Drum?from_search=true&from_srp=true&qid=scxtJ0Rac4&rank=1",
    title: "The Different Drum: Community Making and Peace",
    author: " M. Scott Peck",
    types: "I can share EBOOK",
    description:
      "Psychological approach to community feeling. 4 steps of community creation (pseudocommunity, chaos, emptiness, community) described in this book.",
  },
];

const books2 = [
  {
    image: "https://i.ibb.co/yPL8fgF/Wisdom1-e1519323194233-200x254.png",
    link:
      "https://www.ic.org/community-bookstore/product/starting-a-community/",
    title: "Wisdom of Communities: Volume 1 – Starting a Community",
    author: "articles from 'Communities magazine', various authors",
    types: "I can share EBOOK",
    description:
      "Volume 1 of the Wisdom of Communities series includes both general articles and on-the-ground stories from intentional community founders and other catalysts of cooperative efforts. This book aims to increase the survival rate of attempts to start intentional communities (it’s estimated that currently just 10 percent move past the initial stages).",
  },
  {
    image: "https://i.ibb.co/8MqLgvf/Wisdom2-200x252.png",
    link: "https://www.ic.org/community-bookstore/product/finding-a-community/",
    title: "Wisdom of Communities: Volume 2 – Finding a Community",
    author: "articles from 'Communities magazine', various authors",
    types: "I can share EBOOK",
    description:
      "'In Volume 2 “Finding a Community” we respond to the reality that many searches for intentional community fizzle out due to lack of adequate information, guidance, or exposure to fellow travelers’ stories. Authors share experiences, tools, advice, and perspectives that should help anyone searching for an intentional community—whether to visit or to live in—increase the likelihood of finding what they’re seeking.'",
  },
  {
    image: "https://i.ibb.co/yhgcjvk/Wisdom3-e1519323269676-235x300.png",
    link:
      "https://www.ic.org/community-bookstore/product/communication-in-community/",
    title: "Wisdom of Communities: Volume 3 – Communication in Community",
    author: "articles from 'Communities magazine', various authors",
    types: "I can share EBOOK",
    description:
      "Volume 3 “Communication in Community” includes articles about decision-making, governance, power, gender, class, race, relationships, intimacy, politics, and neighbor relations in cooperative group culture. These areas are key for communities to address if they are to retain members and develop strong and healthy group connection.",
  },
  {
    image:
      "https://i.ibb.co/jfgcHqM/Wisdom-4-Sustainability-in-Community-Front-Cover-200x258.png",
    link:
      "https://www.ic.org/community-bookstore/product/sustainability-in-community/",
    title: "Wisdom of Communities: Volume 4 – Sustainability in Community",
    author: "articles from 'Communities magazine', various authors",
    types: "I can share EBOOK",
    description:
      "In Volume 4 “Sustainability in Community” we focus on food, water, shelter, energy, land, permaculture, ecovillage design, eco-education, and resilience in cooperative culture. These areas will prove more and more essential in allowing communities to navigate changing circumstances on our planet, while growing into new, regenerative ways of living and thriving together.",
  },
  {
    image: "https://i.ibb.co/PgR9KqC/gaian-economics.jpg",
    link: "https://www.gaiaeducation.org/product/gaian-economics/",
    title: "Gaian Economics",
    author:
      "Jonathan Dawson  (Editor), Ross Jackson  (Editor), Helena Norberg-Hodge (Editor)",
    types: "I can share EBOOK",
    description:
      "Gaian Economics: Living Well within Planetary Limits (The Economic Key) is the second in the series of Four Keys that supplement the Curriculum. This particular book is for anyone seeking solutions to the economic problems facing both global society and local communities in a sustainable world.",
  },
  {
    image: "https://i.ibb.co/vDcqG0F/1001-ways-cover.jpg",
    link: "https://ecovillage.org/resources/market/ecovillage-1001-ways-to-heal-the-planet/?gclid=CjwKCAjwx6WDBhBQEiwA_dP8rUnu5fWP0rf-jD2H0xcp0BhqcaKrcs1fldvgYMBDEPwVuCB_FOfopRoCQqMQAvD_BwE",
    title: "Ecovillage: 1001 Ways to Heal the Planet",
    author:
      "Edited by: Kosha Joubert and Leila Dregger",
    types: "I can share EBOOK",
    description:
      "'In this ecovillage book, explore a selection of ecovillage projects from all over the world, including richness and diversity with examples from Europe, Latin America, Asia, Africa and North America.'",
  },
];


function Books() {
  return (
    <div className="values-container">
      <div className="values books">
        <img src="https://i.ibb.co/NCHgNs4/vino3.jpg" alt="light green gtapes or other similar fruit"/>
        <div className="books-content">
          <div className="books-title">
            <div>Books - I can share and I read </div>
          </div>

          <div className="books-list">
            {books.map((book) => (
              <Book book={book} />
            ))}
          </div>
          <div className="books-title">
            <div>
              Books - I can share and I am currently reading/going to read
            </div>
          </div>

          <div className="books-list">
            {books2.map((book) => (
              <Book book={book} />
            ))}
          </div>
          <div className="books-title">
            <div>Websites:</div>
          </div>

          <div className="websites">
            <div className="website">
              <a href="https://ecovillage.org/">https://ecovillage.org/ </a>
            </div>
          </div>
          <div className="websites">
            <div className="website">
              <a href="https://www.ic.org/">https://www.ic.org</a>
            </div>
          </div>
          <div className="websites">
            <div className="website">
              <a href="https://www.ic.org/community-bookstore/product/the-cohouseholding-guide/">
                https://www.ic.org/directory/ (map of communities)
              </a>
            </div>
          </div>
          <div className="websites">
            <div className="website">
              <a href="https://ecovillage.org/">https://ecovillage.org/ </a>
            </div>
          </div>
          <div className="websites">
            <div className="website">
              <a href="https://library.uniteddiversity.coop/Effective_Organising/">
                https://library.uniteddiversity.coop/Effective_Organising/
              </a>
            </div>
          </div>
          <div className="websites">
            <div className="website">
              <a href="http://www.rivendellvillage.org/index.html">
                http://www.rivendellvillage.org/index.html (some DIY materials)
              </a>
            </div>
          </div>

          <div className="books-title">
            <div>Communities:</div>
          </div>
          <div className="websites">
            <div className="website">
              <a href="https://www.dancingrabbit.org/">
                https://www.dancingrabbit.org/{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Books;
