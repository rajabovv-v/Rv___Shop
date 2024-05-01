import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductDescription from "./ProductDescription";
import ProductReview from "./ProductReview";
import ProductCharacteristic from "./ProductCharacteristic";
import Skeleton from "react-loading-skeleton";

function TabMenu({product}) {
  const [params, setPrams] = useSearchParams()
  let isActiveTab = params.get('tab') ? params.get('tab') : 'description';

  function handleTab(tabName) {
    setPrams((prev) => {
      prev.set('tab', tabName)
      return prev
    })
  }


  const list = [
    {
      id: 1,
      name: 'Description',
      tabName: 'description',
    },
    // {
    //   id: 2,
    //   name: 'Review',
    //   tabName: 'review',
    // },
    {
      id: 3,
      name: 'Characteristic',
      tabName: 'characteristic',
    },
  ]

  let tabContent = {
    'description': <ProductDescription product={product}/>,
    // 'review': <ProductReview />,
    'characteristic': <ProductCharacteristic  product={product}/>,
  }

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])


  return (
    <section className="tab-menu">
      <div className="container">
        <div className="tab-menu__wrapper">
          <div className="tab-menu__top">
            {
              list.map(item => (
                <button
                  key={item.id}
                  className={isActiveTab === item.tabName ? "tab-menu__link active" : "tab-menu__link"}
                  onClick={() => handleTab(item.tabName)}
                >
                  {loading ? <Skeleton width={120} height={40} style={{marginLeft: 20, paddingRight: 10}}/> : item.name}
                </button>
              ))
            }
          </div>
          <div className="tab-menu__content">
            {tabContent[isActiveTab]}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TabMenu;
