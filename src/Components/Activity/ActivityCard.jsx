import React from 'react'
import { Card, Tag } from 'primereact';
import { IoIosArrowDown } from 'react-icons/io'
import { Chip } from 'primereact/chip';
import './activity.css';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

export const ActivityCard = ({ url, type, response, statusCode}) => {

    //Converting response data into JSON format

  let obj = response;
  let readableObj = '{\n';
  for (let key in obj) {
    readableObj += '\t'
    readableObj += (typeof obj[key] === 'string') ? `${key}: "${obj[key]}"` :
      `${key} : ${obj[key]}`;
    if (Object.keys(obj).pop() !== key.toString()) {
      readableObj += ',\n'
    }

  }
  readableObj += '\n}'


  return (
    <div className='Cards'>
      <div className='cards-inner'>
        <Accordion >
                          {/* Accotdion Frist Item */}

          <AccordionItem className='accordion-items'>
            <AccordionItemHeading>
              <AccordionItemButton className='tag'>
                <Tag >Method:</Tag>
                <span style={{ marginBottom: '0rem', top: '12%', position: 'relative' }}><IoIosArrowDown /> </span>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className='panel-items'>
              <Card ><span className='cards-content'><h5>{type}</h5></span></Card>
            </AccordionItemPanel>
          </AccordionItem>

                          {/* Accotdion Second Item */}

          <AccordionItem className='accordion-items'>
            <AccordionItemHeading>
              <AccordionItemButton className='tag'>
                <Tag>URL:</Tag>
                <span style={{ marginBottom: '0rem', top: '12%', position: 'relative' }}><IoIosArrowDown /> </span>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className='panel-items'>
              <Card><span className='cards-content'><h5>{url}</h5></span></Card>
            </AccordionItemPanel>
          </AccordionItem>
          
                          {/* Accotdion Third Item */}

          <AccordionItem className='accordion-items'>
            <AccordionItemHeading>
              <AccordionItemButton className='tag'>
                <Tag >Response:</Tag>
                <span style={{ marginBottom: '0rem', top: '12%', position: 'relative' }}><IoIosArrowDown /> </span>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className='panel-items'>
              <Card ><span className='cards-content'>
                <span><Chip label={(statusCode === 0) ? '' : `Status Code:` + statusCode.toString()} /></span>
                <Card>{readableObj}</Card>
              </span></Card>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>

      </div>

    </div>
  )
}
