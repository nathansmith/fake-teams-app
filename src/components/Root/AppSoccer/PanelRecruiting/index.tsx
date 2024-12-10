import { css } from 'styled-system/css';
import CollegeList from './CollegeList';
import FlexStack from '~/common/FlexStack';
import Link from '~/common/Link';
import ListUnordered from '~/common/ListUnordered';
import type { Component } from 'solid-js';

// ==========
// Component.
// ==========

const PanelRecruiting: Component = () => {
  // ==========
  // Expose UI.
  // ==========

  return (
    <div
      class={css({
        display: 'grid',
        columnGap: '{spacing.10}',
        rowGap: '{spacing.5}',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '1000px',

        // Media query.
        lg: {
          gridTemplateColumns: '1fr 30%',
        },
      })}
    >
      <FlexStack>
        <h3>🏋️ Training programs</h3>

        <p>
          During the off-season, there are DFW training programs available to help improve your
          skills and physical strength. You might be interested in some of these venues, which offer
          a variety of events throughout the calendar year.
        </p>

        <ListUnordered>
          <li>
            <Link href="https://exactsports.com/soccer">EXACT Sports</Link>
          </li>

          <li>
            <Link href="https://fcdallascamps.com">FC Dallas camps</Link>
          </li>

          <li>
            <Link href="https://www.performancecourse.com/">Performance Course</Link>
          </li>

          <li>
            <Link href="https://sealysoccerfactory.com">Sealy Soccer Factory</Link>
          </li>
        </ListUnordered>

        <hr />

        <p>
          <Link href="https://ncsasports.org">
            <img
              //
              alt="NCSA College Recruiting"
              title="NCSA College Recruiting"
              src="/recruiting/svg/ncsa-logo.svg"
              width="122"
              height="36"
            />
          </Link>
        </p>

        <p>
          It can also be helpful to create an individual profile on the{' '}
          <Link href="https://ncsasports.org">NCSA Sports</Link> site. Recruiters sometimes use that
          as a resource when looking for eligible student athletes.
        </p>
      </FlexStack>

      <FlexStack
        cssRaw={css.raw({
          // Media query.
          lg: {
            order: '-1',
          },
        })}
      >
        <hr
          class={css({
            // Media query.
            lg: {
              display: 'none',
            },
          })}
        />

        <h3>🎓 Next-level plans</h3>

        <p>
          As you get closer to high school graduation, we will play in more tournaments that allow
          you to be seen by collegiate scouts. If you aspire to play at the college level, here is a
          list of regional schools with soccer programs.
        </p>

        <p>
          We encourage you to think long-term and pick a college or university that aligns with your
          educational goals. If you have a school in mind, please let the Frisco Fusion coaching
          staff know. Where applicable, we can help you get in touch with their athletics
          department.
        </p>

        <p>
          📝 <b>Note:</b>
        </p>

        <p>
          The following list is not exhaustive. You may also want to consider{' '}
          <Link href="https://usnews.com/education/best-colleges/slideshows/colleges-with-affordable-out-of-state-tuition">
            out-of-state
          </Link>{' '}
          schools.
        </p>

        <ListUnordered>
          <li>
            <Link href="https://ncsasports.org/mens-soccer/division-1-colleges">
              Men's soccer: Division 1
            </Link>
          </li>

          <li>
            <Link href="https://ncsasports.org/mens-soccer/division-2-colleges">
              Men's soccer: Division 2
            </Link>
          </li>

          <li>
            <Link href="https://ncsasports.org/mens-soccer/division-3-colleges">
              Men's soccer: Division 3
            </Link>
          </li>
        </ListUnordered>

        <CollegeList />
      </FlexStack>
    </div>
  );
};

// Export.
export default PanelRecruiting;
