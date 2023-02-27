import React from 'react'

const CommentStyle = ({data}) => {
    return(
        <>
            <div className='flex'>
                <div className='py-2 px-2 mx-2'>
                    <img className='rounded-full w-10' src={data.img}/>
                </div>
                <div className='text-xs flex flex-col justify-center'>
                    <div className='text-slate-500'>
                        {data.name}
                    </div>
                    <div className='text-sm'>
                        {data.comment}
                    </div>
                </div>
            </div>
            <div className='pl-5 border-l-2 border-slate-500'>
                {
                    data.reply && data.reply.map(item => {
                        return <CommentStyle data={item} />
                    })
                }
            </div>
        </>
    )
}

const Comments = () => {
    const dummy_comments = [
        {
            "name" : "Joseph Ocasio",
            "comment" : "Nearly 35 years later, and Michael Keaton still got it.",
            "img" : "https://yt3.ggpht.com/ytc/AL5GRJWeVXTM6UKMYT19p8lbzKlvy7jpphLf8vP_RxiIEw=s48-c-k-c0x00ffffff-no-rj"
        },
        {
            "comment" : "Gosh. Hearing Batman say I'm Batman, then Batmanning all over the place was truly one of the moments of all time",
            "name" : "Damian Santana",
            "img" : "https://yt3.ggpht.com/1LkWLyUBscM7u0fJ9wmubXJN9OBaJ60liXx6vEAyQfz8IZAHB9S-5ZXM5FgrgNwZvD_kc_Ct=s48-c-k-c0x00ffffff-no-rj",
            "reply" : [
                {
                    "name" : "Daniel Archer",
                    "comment" : "some say he batmanned too much...",
                    "img" : "https://yt3.ggpht.com/ytc/AL5GRJV_ihMNo2hyvUyu1X-vLD5YXeqRBfsHKUGCUvuD=s48-c-k-c0x00ffffff-no-rj",
                    "reply" : [
                        {
                            "name" : "Brexton Daniels",
                            "comment" : "It's Battin' time",
                            "img" : "https://yt3.ggpht.com/ytc/AL5GRJUwjyd1c7CaaeI98t1U_NhO6bJyuIS4vEBNQhVevw=s48-c-k-c0x00ffffff-no-rj"
                        }
                    ]
                },
                {
                    "name" : "Kane Duckwell",
                    "comment" : "You can hear the tribute to the OG music too.",
                    "img" : "https://yt3.ggpht.com/ytc/AL5GRJVpQAb02j499BfoBPKWnJ7NCuj8cPnUVD1eGfQ7=s48-c-k-c0x00ffffff-no-rj",
                }
            ]
        },
        {
            "name" : "Gloria Woods",
            "comment" : "This movie made me feel like a kid again. The nostalgia factor is strong!",
            "img" : "https://yt3.ggpht.com/ytc/AL5GRJW77kzTwQYnFfEhnhf3qJBrNTmHEBpxJ83HvCk-QQ=s48-c-k-c0x00ffffff-no-rj"
        },
        {
            "comment" : "The Batmobile looks amazing! Can't wait to see it in action",
            "name" : "Jordan Espinoza",
            "img" : "https://yt3.ggpht.com/ytc/AL5GRJXKc5MIvKgdnFJspkl64QNrvil40eq9_E3iDxFv=s48-c-k-c0x00ffffff-no-rj",
            "reply" : [
                {
                    "name" : "Livia Granger",
                    "comment" : "Agreed",
                    "img" : "https://yt3.ggpht.com/ytc/AL5GRJUv7fCxdt2ObO4aa97nHQOMh3c6Q2Drom5tzSTJyA=s48-c-k-c0x00ffffff-no-rj",
                }
            ]
        },
        {
            "name" : "Kane Duckwell",
            "comment" : "You can hear the tribute to the OG music too.",
            "img" : "https://yt3.ggpht.com/ytc/AL5GRJU8-PmRSPCbnSmXV1ojVajLuEWIysQiHv6Akd9e=s48-c-k-c0x00ffffff-no-rj",
            "reply" : [
                {
                    "name" : "Brexton Daniels",
                    "comment" : "It's Battin' time",
                    "img" : "https://yt3.ggpht.com/qLwsbuObLl2C4ngp-esSz17m--aguoV6XMGtq3mpdSUCcnYJGE0nD5UToKI_CjzKOJRZMeyfAg=s48-c-k-c0x00ffffff-no-rj"
                },
                {
                    "name" : "Brexton Daniels",
                    "comment" : "It's Battin' time",
                    "img" : "https://yt3.ggpht.com/ytc/AL5GRJUeTrBV294QAp6NCQFXAG5RStofpuvzpacuasU65K8=s48-c-k-c0x00ffffff-no-rj",
                    "reply" : [
                        {
                            "name" : "Brexton Daniels",
                            "comment" : "It's Battin' time",
                            "img" : "https://yt3.ggpht.com/ytc/AL5GRJUfZVLkRTxQjz-9WzRg9f0KfXk0vW5vYk2JTWETWg=s48-c-k-c0x00ffffff-no-rj"
                        },
                        {
                            "name" : "Brexton Daniels",
                            "comment" : "It's Battin' time",
                            "img" : "https://yt3.ggpht.com/ytc/AL5GRJU0xuQ1RoieS6QNhPOv0DsLJnaYUQf1skidXQgzBg=s48-c-k-c0x00ffffff-no-rj"
                        }
                    ]
                },
            ]
        },
        {
            "name" : "Brexton Daniels",
            "comment" : "It's Battin' time",
            "img" : "https://yt3.ggpht.com/ytc/AL5GRJXKc5MIvKgdnFJspkl64QNrvil40eq9_E3iDxFv=s48-c-k-c0x00ffffff-no-rj"
        },
    ];
    
  return (
    <>
        <div>
            20,458 Comments
            <div>
                {
                    dummy_comments.map(item => {
                        return <CommentStyle data={item} />
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Comments