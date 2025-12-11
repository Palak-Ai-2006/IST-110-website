import ContentCard from '@/components/ContentCard'

type Assignment = {
  title: string
  description?: string
  reflection?: string
  image?: string
  preview?: string
  link?: string
  metadata?: { label: string; value: string }[]
}

const assignments: Assignment[] = [
  { 
    title: 'Assignment 1: Choose Your OS', 
    description: 'It involved comparing Windows, macOS, and Linux based on their strengths, weaknesses, and suitability for different types of organizations.',
    reflection: 'Evaluating each OS helped me understand how technology choices depend on organizational needs, budgets, and workflows. I learned how features like security, software compatibility, and usability directly impact productivity and why different industries rely on different systems.',
    // Use preview (OneDrive embed) - This will show an embedded preview
    preview: 'https://pennstateoffice365-my.sharepoint.com/personal/pkc5358_psu_edu/_layouts/15/Doc.aspx?sourcedoc={b97a0a33-89ba-47ae-a232-82ebffb33f67}&action=embedview',
    link:'https://pennstateoffice365-my.sharepoint.com/:w:/g/personal/pkc5358_psu_edu/IQAzCnq5uomuR6Iyguv_sz9nAdZEp5iYT4eKPZjY_jATSJc?e=xMLjmQ',
    metadata: [
      { label: 'Format', value: 'Microsoft Word Document' },
      { label: 'Date Completed', value: 'October 4, 2025' },
    ]
  },
  { 
    title: 'Assignment 2: Integrating Information Technology in Different Industries ', 
    description: 'Explored how major companies use AI, automation, and data analytics to improve operations.',
    reflection: 'Researching these companies helped me understand how technology transforms industries—from robotics in manufacturing to AI-powered logistics and personalized customer experiences. It showed the real-world impact of IT on efficiency, revenue, and organizational decision-making.',
    preview: 'https://pennstateoffice365-my.sharepoint.com/personal/pkc5358_psu_edu/_layouts/15/Doc.aspx?sourcedoc={f7fead3b-200d-40ee-bc73-baae92158aed}&action=embedview',
    link: 'https://pennstateoffice365-my.sharepoint.com/:w:/g/personal/pkc5358_psu_edu/IQA7rf73DSDuQLxzuq6SFYrtAUphasG66KwsbJZC8DG-FCw?e=btpjfk',
    metadata: [
      { label: 'Format', value: 'Microsoft Word Document' },
      { label: 'Date Completed', value: 'December 7, 2025' },
    ]
  },
  { 
    title: 'Assignment 3: Reflection on Device Teardowns',
    description: 'It involved analyzing iFixit teardowns to understand internal hardware components and repairability.',
    reflection: 'Comparing the MacBook and iPad showed me how differently laptops and tablets balance performance, space, and repairability. I gained a better understanding of system-on-chip design, tightly integrated hardware, and why modern devices are harder to upgrade or repair.',
    preview: 'https://pennstateoffice365-my.sharepoint.com/personal/pkc5358_psu_edu/_layouts/15/Doc.aspx?sourcedoc={a9d5acff-71f8-4354-92c6-a55cc3f005bf}&action=embedview',
    link: 'https://pennstateoffice365-my.sharepoint.com/:w:/g/personal/pkc5358_psu_edu/IQD_rNWp-HFUQ5LGpVzD8AW_AbDyEzsT9jf62OqK18dskho?e=30f712',
    metadata: [
      { label: 'Format', value: 'Microsoft Word Document' },
      { label: 'Date Completed', value: 'September 28, 2025' },
    ]
  },
  { 
    title: 'Assignment 4: Juveniles and Cybercrime',
    description: 'This assignment focused on whether juveniles should face adult-level punishment for serious cybercrimes.',
    reflection: 'Writing this essay helped me think critically about legal accountability in the digital age. I learned how complex cybercrimes challenge traditional juvenile justice and require balancing rehabilitation with the seriousness of online harm.',
    preview: 'https://pennstateoffice365-my.sharepoint.com/personal/pkc5358_psu_edu/_layouts/15/Doc.aspx?sourcedoc={ef7639cc-3e58-4661-b3eb-590348b0aa39}&action=embedview',
    link: 'https://pennstateoffice365-my.sharepoint.com/:w:/g/personal/pkc5358_psu_edu/IQDMOXbvWD5hRrPrWQNIsKo5AVeyowcDqhhTRMq6FtbxTf0?e=4mewyb',
    metadata: [
      { label: 'Format', value: 'Microsoft Word Document' },
      { label: 'Date Completed', value: 'November 30, 2025' },
    ]
  },
  { 
    title: 'Assignment 5: SQL Basics and Query Practice',
    description: 'This assignment focused on learning SQL fundamentals and writing queries to retrieve, filter, and organize data from sample tables.',
    reflection: 'Working with SQL improved my understanding of how databases store and manage information. Writing queries helped me think logically about data relationships and reinforced the importance of accuracy and structure in data-driven decision-making.',
    preview: 'https://pennstateoffice365-my.sharepoint.com/personal/pkc5358_psu_edu/_layouts/15/Doc.aspx?sourcedoc={2a0cef78-abe5-4176-af1d-3b7ceac0f6b0}&action=embedview',
    link: 'https://pennstateoffice365-my.sharepoint.com/:w:/g/personal/pkc5358_psu_edu/IQB47wwq5at2Qa8dO3zqwPawAZAfjRZ2JB9rB738su2RnSg?e=40cIR6',
    metadata: [
      { label: 'Format', value: 'Microsoft Word Document' },
      { label: 'Date Completed', value: 'October 15, 2025' },
    ]
  },
  { 
    title: 'Assignment 6: Infographic',
    description: 'This assignment focused on creating a visual infographic that summarized key course concepts in a clear and engaging way.',
    reflection: 'I learned how to communicate complex information through simple visuals and concise wording. Designing the infographic helped me think more critically about what information matters most and how to present it clearly.',
    image: '/assignments/PHOTO-2025-09-21-19-11-33.jpg',
    link: 'https://pennstateoffice365-my.sharepoint.com/:i:/g/personal/pkc5358_psu_edu/IQAZdxt3J4YJSKan2FtRCR3yAZ--6XEu0GNGBO2Aok7EseQ?e=KiwMYf',
    metadata: [
      { label: 'Format', value: 'Image (JPEG)' },
      { label: 'Date Completed', value: 'September 21, 2025' },
    ]
  },
]

export default function AssignmentsPage() {
  return (
    <main className="min-h-screen px-6 md:px-12 lg:px-24 py-16 md:py-24 bg-gradient-to-b from-black via-black to-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">IST 110</p>
          <h1 className="text-4xl md:text-5xl font-light metallic-text">Individual Assignments</h1>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {assignments.map((assignment) => (
            <ContentCard
              key={assignment.title}
              title={assignment.title}
              description={assignment.description}
              reflection={assignment.reflection}
              image={assignment.image}
              preview={assignment.preview}
              link={assignment.link}
              metadata={assignment.metadata}
              showPlaceholders={!assignment.description}
            />
          ))}
        </div>
      </div>
    </main>
  )
}



