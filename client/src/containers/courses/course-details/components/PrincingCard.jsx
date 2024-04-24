import { BsCheck } from "react-icons/bs";
import Typography from "../../../../components/common/Typography";

const PrincingCard = ({ currentCourse }) => {
  return (
    <div className="pricing_card">
      <Typography as="h3" variant="h3" color="black">
        Modalidad Asincrónica
      </Typography>

      <ul className="my-8 pricing_card__benefits_list" role="list">
        <li className="flex items-start gap-2">
          <BsCheck className="mt-1" size={20} />
          <Typography as="p" variant="small" color="darkGray">
            Clases pre-grabadas
          </Typography>
        </li>
        <li className="flex items-start gap-2 mt-2">
          <BsCheck className="mt-1" size={20} />
          <Typography as="p" variant="small" color="darkGray">
            Proyecto Final
          </Typography>
        </li>
        <li className="flex items-start gap-2 mt-2">
          <BsCheck className="mt-1" size={20} />
          <Typography as="p" variant="small" color="darkGray">
            Archivos adjuntos disponibles{" "}
          </Typography>
        </li>
      </ul>

      <div className="bg-[#242526] h-[1px] w-full"></div>

      <div className="pricing_card__price">
        <Typography as="p" variant="xsmall" color="darkGray">
          Curso Asincrónico Completo ${currentCourse?.asyncCoursePrice}
        </Typography>

        <Typography as="h3" variant="h3" color="darkGray">
          Finales ${currentCourse?.asyncCoursePrice}
        </Typography>

        <a href={currentCourse?.paymentUrl} className="btn w-full">
          Inscribirme Ahora
        </a>
      </div>
    </div>
  );
};

export default PrincingCard;
