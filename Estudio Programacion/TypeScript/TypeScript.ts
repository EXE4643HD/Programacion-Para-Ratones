// ============================================================================
// GUÍA TEÓRICA Y PRÁCTICA: TYPESCRIPT AVANZADO Y PROGRAMACIÓN ORIENTADA A OBJETOS
// ============================================================================

// ----------------------------------------------------------------------------
// SECCIÓN 1: DEMOSTRACIÓN DE TIPADO ESTRUCTURAL (DUCK TYPING)
// ----------------------------------------------------------------------------

/**
 * CREACIÓN DE CLASE: Usuario
 * QUÉ HACE: Define un modelo de objeto Usuario con dos propiedades públicas.
 * PARA QUÉ SIRVE: Sirve para instanciar objetos que representan usuarios en el sistema.
 */
class Usuario {
  // Declaración del atributo público 'nombre' de tipo texto (string)
  public nombre: string;

  // Declaración del atributo público 'email' de tipo texto (string)
  public email: string;

  /**
   * CONSTRUCTOR DE LA CLASE
   * QUÉ HACE: Inicializa los atributos 'nombre' y 'email' al instanciar la clase con 'new'.
   * @param nombre Nombre completo del usuario
   * @param email Correo electrónico del usuario
   */
  constructor(nombre: string, email: string) {
    this.nombre = nombre; // Asigna el parámetro recibido al atributo del objeto
    this.email = email;   // Asigna el parámetro recibido al atributo del objeto
  }
}

/**
 * CREACIÓN DE INTERFAZ: Contacto
 * QUÉ HACE: Define un contrato o 'forma' (shape) que debe tener un objeto.
 * PARA QUÉ SIRVE: En TypeScript, cualquier objeto que posea las propiedades declaradas
 * aquí será compatible con esta interfaz gracias al Tipado Estructural (Duck Typing).
 */
interface Contacto {
  nombre: string; // Requiere que el objeto tenga una propiedad 'nombre' de tipo string
  email: string;  // Requiere que el objeto tenga una propiedad 'email' de tipo string
}

/**
 * CREACIÓN DE FUNCIÓN: enviarNotificacion
 * QUÉ HACE: Recibe un parámetro que debe cumplir con la estructura de la interfaz Contacto y no retorna valor (void).
 * PARA QUÉ SIRVE: Demuestra cómo TypeScript no exige declarar "implements Contacto" en la clase Usuario.
 * @param contacto Objeto que satisface la forma de la interfaz Contacto
 */
function enviarNotificacion(contacto: Contacto): void {
  // Imprime en consola usando plantilla de texto (template literals)
  console.log(`Enviando mensaje a ${contacto.nombre} (${contacto.email})`);
}

// CREACIÓN DE INSTANCIA: Se crea un objeto 'usuario' de tipo 'Usuario'
const usuario = new Usuario("Martín Gómez", "mgomez@universidad.edu");

// INVOCACIÓN DE FUNCIÓN: Se pasa 'usuario' a la función 'enviarNotificacion'.
// Funciona porque 'Usuario' cumple estructuralmente con la interfaz 'Contacto'.
enviarNotificacion(usuario);


// ----------------------------------------------------------------------------
// SECCIÓN 2: TIPOS CONTROLADOS (unknown, void, never) Y TYPE NARROWING
// ----------------------------------------------------------------------------

/**
 * CREACIÓN DE FUNCIÓN: procesarRespuestaApi
 * QUÉ HACE: Recibe un parámetro de tipo 'unknown' (desconocido) y evalúa su tipo real en tiempo de ejecución.
 * PARA QUÉ SIRVE: Demuestra la alternativa segura al tipo 'any'. TypeScript obliga a verificar
 * el tipo antes de llamar métodos sobre la variable (Type Narrowing / Estrechamiento de tipos).
 * @param respuesta Datos recibidos cuyo tipo no conocemos con certeza
 */
function procesarRespuestaApi(respuesta: unknown): void {
  // VERIFICACIÓN DE TIPO 1: Comprueba si 'respuesta' es una cadena de texto
  if (typeof respuesta === "string") {
    // Dentro de este bloque IF, TypeScript deduce automáticamente que 'respuesta' es de tipo 'string'
    console.log(respuesta.toUpperCase()); // Se puede usar toUpperCase() de forma segura
  } 
  // VERIFICACIÓN DE TIPO 2: Comprueba si 'respuesta' es una instancia de la clase 'Error'
  else if (respuesta instanceof Error) {
    // Dentro de este bloque, TypeScript sabe que 'respuesta' es de tipo 'Error'
    console.error(respuesta.message); // Se puede acceder a .message de forma segura
  }
}

/**
 * CREACIÓN DE FUNCIÓN: lanzarExcepcion
 * QUÉ HACE: Lanza un error y interrumpe el flujo del programa.
 * PARA QUÉ SIRVE: Usa el tipo de retorno 'never', indicando que la función NUNCA retorna un valor normalmente.
 * @param mensaje Mensaje descriptivo del error
 */
function lanzarExcepcion(mensaje: string): never {
  throw new Error(mensaje); // Lanza una excepción
}


// ----------------------------------------------------------------------------
// SECCIÓN 3: UNIONES, INTERSECCIONES Y GUARDA DE TIPO PERSONALIZADA (TYPE GUARD)
// ----------------------------------------------------------------------------

/**
 * CREACIÓN DE INTERFAZ: Profesor
 * QUÉ HACE: Define la estructura de un objeto que representa a un docente.
 */
interface Profesor {
  legajo: string;  // Número identificador único de legajo
  catedra: string; // Nombre de la cátedra que imparte
}

/**
 * CREACIÓN DE INTERFAZ: Estudiante
 * QUÉ HACE: Define la estructura de un objeto que representa a un alumno.
 */
interface Estudiante {
  legajo: string;  // Número identificador único de legajo
  carrera: string; // Nombre de la carrera universitaria que cursa
}

/**
 * CREACIÓN DE GUARDA DE TIPO PERSONALIZADA (CUSTOM TYPE GUARD)
 * QUÉ HACE: Evalúa si un objeto es de tipo Profesor mediante el predicado de tipo 'persona is Profesor'.
 * PARA QUÉ SIRVE: Permite a TypeScript refinar tipos dentro de estructuras condicionales (if/else).
 * @param persona Objeto que puede ser de tipo Profesor o Estudiante (Unión de tipos |)
 * @returns Retorna un booleano, pero TypeScript interpreta la firma 'persona is Profesor' para el compilador.
 */
function esProfesor(persona: Profesor | Estudiante): persona is Profesor {
  // Comprueba si la propiedad 'catedra' existe en el objeto recibido
  return (persona as Profesor).catedra !== undefined;
}

/**
 * CREACIÓN DE FUNCIÓN: imprimirFicha
 * QUÉ HACE: Imprime información específica según el tipo de persona recibida.
 * PARA QUÉ SIRVE: Utiliza el Type Guard para diferenciar entre Profesor o Estudiante.
 * @param persona Objeto de tipo Unión (Profesor | Estudiante)
 */
function imprimirFicha(persona: Profesor | Estudiante): void {
  // Se invoca la guarda de tipo personalizada
  if (esProfesor(persona)) {
    // En este bloque, TypeScript garantiza que 'persona' es 'Profesor'
    console.log(`Docente de la cátedra: ${persona.catedra}`);
  } else {
    // En este bloque, TypeScript deduce por exclusión que 'persona' es 'Estudiante'
    console.log(`Estudiante de la carrera: ${persona.carrera}`);
  }
}


// ----------------------------------------------------------------------------
// SECCIÓN 4: PARAMETER PROPERTIES, ENCAPSULAMIENTO Y ACCESSORS
// ----------------------------------------------------------------------------

/**
 * CREACIÓN DE CLASE CON PARAMETER PROPERTIES: Materia
 * QUÉ HACE: Declara los atributos e inicializa la clase directamente en los parámetros del constructor.
 * PARA QUÉ SIRVE: Evita declarar propiedades manualmente y escribir "this.propiedad = propiedad".
 */
class Materia {
  /**
   * CONSTRUCTOR CON PROPIEDADES DE PARÁMETRO
   * @param codigo Atributo privado solo accesible dentro de la clase Materia
   * @param nombre Atributo público accesible desde cualquier parte del programa
   * @param horas Atributo de solo lectura (readonly) que no puede ser modificado tras la creación
   */
  constructor(
    private codigo: string,
    public nombre: string,
    public readonly horas: number
  ) {}
}

/**
 * CREACIÓN DE CLASE CON ENCAPSULAMIENTO: Evaluacion
 * QUÉ HACE: Protege el atributo privado '_nota' utilizando metodos Getters y Setters.
 * PARA QUÉ SIRVE: Permite agregar lógica de validación de datos antes de modificar valores.
 */
class Evaluacion {
  // Declaración del atributo privado '_nota' inicializado en 0
  private _nota: number = 0;

  /**
   * CONSTRUCTOR
   * @param materia Propiedad pública y de solo lectura que almacena el nombre de la materia
   */
  constructor(public readonly materia: string) {}

  /**
   * GETTER PARA LA PROPIEDAD 'nota'
   * QUÉ HACE: Devuelve el valor del atributo privado '_nota'.
   * PARA QUÉ SIRVE: Permite leer la nota de forma limpia usando 'objeto.nota'.
   */
  get nota(): number {
    return this._nota;
  }

  /**
   * SETTER PARA LA PROPIEDAD 'nota'
   * QUÉ HACE: Recibe un número, valida que esté entre 1 y 10, y asigna el valor.
   * PARA QUÉ SIRVE: Previene la asignación de notas inválidas fuera del rango numérico permitido.
   * @param valor Nueva nota que se intenta asignar
   */
  set nota(valor: number) {
    if (valor < 1 || valor > 10) {
      throw new Error("La nota debe estar comprendida entre 1 y 10.");
    }
    this._nota = valor; // Si pasa la validación, guarda el valor
  }
}


// ----------------------------------------------------------------------------
// SECCIÓN 5: HERENCIA Y CLASES ABSTRACTAS
// ----------------------------------------------------------------------------

/**
 * CREACIÓN DE CLASE ABSTRACTA: ComponenteUI
 * QUÉ HACE: Define una clase base que no puede instanciarse directamente con 'new'.
 * PARA QUÉ SIRVE: Sirve de plantilla o modelo base para la herencia en subclases.
 */
abstract class ComponenteUI {
  /**
   * CONSTRUCTOR BASE
   * @param id Atributo 'protected' accesible dentro de esta clase y por subclases heredadas
   */
  constructor(protected id: string) {}

  /**
   * MÉTODO ABSTRACTO: renderizar
   * QUÉ HACE: No tiene cuerpo ni código.
   * PARA QUÉ SIRVE: Obliga a todas las subclases que hereden de ComponenteUI a implementar este método.
   */
  abstract renderizar(): void;

  /**
   * MÉTODO CONCRETO: mostrar
   * QUÉ HACE: Imprime un mensaje e invoca el método renderizar.
   * PARA QUÉ SIRVE: Define un comportamiento común compartido por todas las subclases.
   */
  public mostrar(): void {
    console.log(`Mostrando componente ${this.id}`);
    this.renderizar(); // Llama a la implementación concreta definida en la subclase
  }
}

/**
 * CREACIÓN DE SUBCLASE: Boton
 * QUÉ HACE: Extiende (hereda de) ComponenteUI e implementa el método abstracto 'renderizar'.
 * PARA QUÉ SIRVE: Modela un componente concreto de botón reutilizando la estructura de ComponenteUI.
 */
class Boton extends ComponenteUI {
  /**
   * CONSTRUCTOR DE LA SUBCLASE
   * @param id Identificador único para el componente
   * @param etiqueta Texto interno que se mostrará dentro del botón
   */
  constructor(id: string, private etiqueta: string) {
    // Invoca al constructor de la clase abstracta padre (ComponenteUI)
    super(id);
  }

  /**
   * IMPLEMENTACIÓN DEL MÉTODO ABSTRACTO 'renderizar'
   * QUÉ HACE: Define la salida en pantalla en formato HTML para este botón.
   */
  public renderizar(): void {
    console.log(`<button id="${this.id}">${this.etiqueta}</button>`);
  }
}


// ----------------------------------------------------------------------------
// SECCIÓN 6: CLASES GENÉRICAS CON RESTRICCIONES (CONSTRAINTS) Y UTILITY TYPES
// ----------------------------------------------------------------------------

/**
 * CREACIÓN DE INTERFAZ BASE: EntidadBase
 * QUÉ HACE: Exige que todo objeto tenga un identificador numérico 'id'.
 */
interface EntidadBase {
  id: number;
}

/**
 * CREACIÓN DE CLASE GENÉRICA: Coleccion<T>
 * QUÉ HACE: Define una colección de datos donde el tipo 'T' está parametrizado.
 * RESTRICCIÓN (Constraint): 'T extends EntidadBase' garantiza que cualquier tipo usado en esta clase tenga un 'id'.
 * PARA QUÉ SIRVE: Permite crear repositorios o listas de datos reutilizables con seguridad de tipos.
 */
class Coleccion<T extends EntidadBase> {
  // Arreglo privado para almacenar los elementos de tipo 'T'
  private elementos: T[] = [];

  /**
   * MÉTODO: agregar
   * QUÉ HACE: Recibe un elemento de tipo 'T' y lo añade al arreglo interno.
   * @param item Elemento a guardar
   */
  public agregar(item: T): void {
    this.elementos.push(item);
  }

  /**
   * MÉTODO: buscarPorId
   * QUÉ HACE: Busca un elemento dentro del arreglo filtrando por el 'id'.
   * @param id Identificador numérico a buscar
   * @returns Retorna el elemento encontrado de tipo 'T' o 'undefined' si no existe.
   */
  public buscarPorId(id: number): T | undefined {
    return this.elementos.find((e) => e.id === id);
  }
}

/**
 * CREACIÓN DE INTERFAZ PARA DEMOSTRAR UTILITY TYPES: EstudianteDTO
 * QUÉ HACE: Define la estructura completa de un objeto de transferencia de datos de estudiante.
 */
interface EstudianteDTO {
  id: number;
  nombre: string;
  email: string;
  claveAcceso: string;
}

// 1. UTILITY TYPE: Partial<T>
// QUÉ HACE: Hace que todas las propiedades de EstudianteDTO sean opcionales (opcional: '?').
// PARA QUÉ SIRVE: Útil para operaciones de actualización parcial (como peticiones HTTP PATCH).
type ActualizacionEstudiante = Partial<EstudianteDTO>;

// 2. UTILITY TYPE: Omit<T, K>
// QUÉ HACE: Crea un nuevo tipo quitando la propiedad indicada ("claveAcceso").
// PARA QUÉ SIRVE: Útil para devolver datos seguros del usuario sin filtrar información confidencial.
type RespuestaPublicaEstudiante = Omit<EstudianteDTO, "claveAcceso">;

// 3. UTILITY TYPE: Pick<T, K>
// QUÉ HACE: Crea un nuevo tipo seleccionando solo un subconjunto específico de propiedades.
// PARA QUÉ SIRVE: Útil para login o autenticación donde solo necesitamos correo y contraseña.
type CredencialesResumidas = Pick<EstudianteDTO, "email" | "claveAcceso">;

// 4. UTILITY TYPE: Readonly<T>
// QUÉ HACE: Convierte todas las propiedades en inmutables (de solo lectura).
// PARA QUÉ SIRVE: Previene modificaciones en el objeto una vez creado.
type EstudianteInmutable = Readonly<EstudianteDTO>;


// ----------------------------------------------------------------------------
// SECCIÓN 7: DECORADORES DE MÉTODO (METAPROGRAMACIÓN EN TYPESCRIPT)
// ----------------------------------------------------------------------------

/**
 * CREACIÓN DE UN DECORADOR DE MÉTODO: AuditarEjecucion
 * QUÉ HACE: Es una función que envuelve un método de una clase para interceptar y registrar su ejecución.
 * PARA QUÉ SIRVE: Permite agregar funcionalidades transversales (como logging, métricas o seguridad) sin alterar el código del método original.
 * @param target Prototipo de la clase
 * @param propertyKey Nombre del método decorado
 * @param descriptor Objeto que contiene las propiedades y la función original
 */
function AuditarEjecucion(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  // Guarda la referencia de la función o método original antes de modificarlo
  const metodoOriginal = descriptor.value;

  // Reemplaza el método original con una nueva función interceptora
  descriptor.value = function (...args: any[]) {
    // Registra en consola antes de invocar el método real
    console.log(`[AUDITORÍA] Invocando método: ${propertyKey} con argumentos: ${JSON.stringify(args)}`);

    // Ejecuta el método original con su contexto (this) y argumentos recibidos
    const resultado = metodoOriginal.apply(this, args);

    // Registra en consola tras finalizar con éxito
    console.log(`[AUDITORÍA] Método ${propertyKey} ejecutado con éxito.`);

    // Devuelve el resultado producido por la función original
    return resultado;
  };

  // Retorna el descriptor de la propiedad modificado
  return descriptor;
}

/**
 * CREACIÓN DE CLASE: CalculadoraAcademica
 * QUÉ HACE: Proporciona métodos para realizar cálculos numéricos académicos.
 */
class CalculadoraAcademica {
  /**
   * APLICACIÓN DEL DECORADOR: @AuditarEjecucion
   * QUÉ HACE: Intercepta las llamadas a 'calcularPromedio' para medir o registrar la auditoría.
   * @param notas Arreglo de números representando las calificaciones
   * @returns Retorna la nota promedio calculada
   */
  @AuditarEjecucion
  public calcularPromedio(notas: number[]): number {
    // Suma todos los elementos del arreglo con el método reduce
    const suma = notas.reduce((acc, curr) => acc + curr, 0);
    // Devuelve el promedio dividiendo la suma por la cantidad total de elementos
    return suma / notas.length;
  }
}


// ----------------------------------------------------------------------------
// SECCIÓN 8: CASO INTEGRADOR PRÁCTICO (PATRÓN REPOSITORY & SERVICE)
// ----------------------------------------------------------------------------

/**
 * 1. DOMINIO DE DATOS
 * CREACIÓN DE INTERFAZ: Identificable
 * QUÉ HACE: Exige que todo modelo de datos posea un identificador único de tipo string.
 */
export interface Identificable {
  id: string;
}

/**
 * CREACIÓN DE CLASE DE DOMINIO: Inscripcion
 * QUÉ HACE: Representa la entidad de dominio para la inscripción de un estudiante a una materia.
 * IMPLICA: Implementa la interfaz 'Identificable'.
 */
export class Inscripcion implements Identificable {
  /**
   * CONSTRUCTOR CON PARAMETER PROPERTIES E INICIALIZACIÓN POR DEFECTO
   * @param id Identificador único de la inscripción
   * @param estudianteId Identificador del alumno
   * @param materiaCodigo Código de la materia a cursar
   * @param fecha Fecha de registro (se asigna automáticamente 'new Date()' si se omite)
   */
  constructor(
    public readonly id: string,
    public readonly estudianteId: string,
    public readonly materiaCodigo: string,
    public readonly fecha: Date = new Date()
  ) {}
}

/**
 * 2. CAPA DE PERSISTENCIA (INTERFAZ GENÉRICA REPOSITORY)
 * CREACIÓN DE INTERFAZ GENÉRICA: IRepository<T>
 * QUÉ HACE: Define las operaciones CRUD asíncronas estándar que debe cumplir cualquier repositorio.
 * @template T Tipo de la entidad almacenada (debe ser 'Identificable')
 */
export interface IRepository<T extends Identificable> {
  guardar(entidad: T): Promise<void>;
  buscarPorId(id: string): Promise<T | null>;
  listarTodos(): Promise<T[]>;
}

/**
 * 3. IMPLEMENTACIÓN EN MEMORIA
 * CREACIÓN DE CLASE GENÉRICA: BaseMemoriaRepository<T>
 * QUÉ HACE: Implementa 'IRepository<T>' usando un Mapa de JavaScript/TypeScript en memoria.
 * PARA QUÉ SIRVE: Permite simular una base de datos sin depender de servicios externos.
 */
export class BaseMemoriaRepository<T extends Identificable> implements IRepository<T> {
  // Estructura de Map para guardar pares clave-valor (id -> entidad)
  protected coleccion = new Map<string, T>();

  /**
   * GUARDA UNA ENTIDAD EN EL MAPA
   * @param entidad Objeto a guardar
   */
  async guardar(entidad: T): Promise<void> {
    this.coleccion.set(entidad.id, entidad);
  }

  /**
   * BUSCA UNA ENTIDAD POR SU ID
   * @param id Identificador a consultar
   */
  async buscarPorId(id: string): Promise<T | null> {
    return this.coleccion.get(id) || null;
  }

  /**
   * OBTIENE TODAS LAS ENTIDADES GUARDADAS
   */
  async listarTodos(): Promise<T[]> {
    return Array.from(this.coleccion.values());
  }
}

/**
 * 4. CAPA DE SERVICIO (LÓGICA DE NEGOCIO)
 * CREACIÓN DE CLASE: InscripcionService
 * QUÉ HACE: Maneja la lógica de negocio para la matriculación de alumnos.
 * PARA QUÉ SIRVE: Aplica el principio de Inyección de Dependencias al recibir el repositorio en su constructor.
 */
export class InscripcionService {
  /**
   * CONSTRUCTOR CON INYECCIÓN DE DEPENDENCIAS
   * @param repoInscripciones Repositorio que cumpla con la interfaz IRepository<Inscripcion>
   */
  constructor(private repoInscripciones: IRepository<Inscripcion>) {}

  /**
   * MÉTODO DE NEGOCIO: matricularEstudiante
   * QUÉ HACE: Genera un ID único, crea el objeto Inscripcion y lo persiste mediante el repositorio.
   * @param estudianteId ID del alumno
   * @param materiaCodigo Código de la materia
   */
  public async matricularEstudiante(
    estudianteId: string,
    materiaCodigo: string
  ): Promise<Inscripcion> {
    // Genera una cadena alfanumérica única aleatoria
    const idGenerado = `INS-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;

    // Instancia el nuevo objeto de dominio 'Inscripcion'
    const nuevaInscripcion = new Inscripcion(idGenerado, estudianteId, materiaCodigo);

    // Persiste de forma asíncrona en el repositorio inyectado
    await this.repoInscripciones.guardar(nuevaInscripcion);

    console.log(`[ÉXITO] Inscripción registrada con ID: ${nuevaInscripcion.id}`);
    return nuevaInscripcion;
  }
}


// ----------------------------------------------------------------------------
// SECCIÓN 9: PUNTO DE ENTRADA Y PRUEBAS DE EJECUCIÓN (BOOTSTRAP)
// ----------------------------------------------------------------------------

/**
 * CREACIÓN DE FUNCIÓN ASÍNCRONA: bootstrap
 * QUÉ HACE: Coordina la ejecución de pruebas para verificar que todo el código funcione correctamente.
 */
async function bootstrap() {
  console.log("=== PROCESANDO RESPUESTA API (unknown + type narrowing) ===");
  procesarRespuestaApi("respuesta recibida");

  console.log("\n==================================================");
  console.log("=== FICHA DOCENTE / ESTUDIANTE (Custom Type Guards) ===");
  imprimirFicha({ legajo: "LEG-111", catedra: "Algoritmos y Estructuras de Datos" });
  imprimirFicha({ legajo: "LEG-222", carrera: "Ingeniería en Sistemas de Información" });

  console.log("\n==================================================");
  console.log("=== AUDITORÍA DE DECORADOR EN TIEMPO DE EJECUCIÓN ===");
  // Instancia la clase de la calculadora
  const calc = new CalculadoraAcademica();
  // Ejecuta el método decorado
  const promedio = calc.calcularPromedio([8, 9, 10]);
  console.log(`Promedio calculado: ${promedio}`);

  console.log("\n==================================================");
  console.log("=== EJECUCIÓN DEL CASO INTEGRADOR (REPOSITORIO Y SERVICIO) ===");
  // Instancia el repositorio en memoria para Inscripciones
  const repo = new BaseMemoriaRepository<Inscripcion>();
  
  // Instancia el servicio inyectándole el repositorio recién creado
  const servicio = new InscripcionService(repo);

  // Ejecuta operaciones de matriculación de prueba
  await servicio.matricularEstudiante("EST-101", "PAR-302");
  await servicio.matricularEstudiante("EST-102", "PAR-302");

  // Lista todos los registros guardados
  const todas = await repo.listarTodos();
  console.log(`Total de inscripciones almacenadas en repositorio: ${todas.length}`);
}

// INVOCACIÓN DEL PUNTO DE ENTRADA PRINCIPAL PARA EJECUTAR EL PROGRAMA
bootstrap();